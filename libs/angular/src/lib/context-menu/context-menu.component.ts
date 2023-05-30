import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { DropdownOption } from '@sebgroup/extract'
import { Subject, Subscription } from 'rxjs'
import { ON_SCROLL_TOKEN } from '../shared/on-scroll.directive'

export enum PositionTypes {
  Fixed = 'fixed',
  Absolute = 'absolute'
} 
@Component({
  selector: 'ngg-context-menu',
  templateUrl: './context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [':host { position: relative; }'],
})
export class NggContextMenuComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  @Input() direction: 'ltr' | 'rtl' = 'ltr'
  @Input() menuItems: DropdownOption[] = []
  @Input() menuItemTemplate?: TemplateRef<unknown>
  @Input() menuAnchorTemplate?: TemplateRef<unknown>
  @Input() closeOnScroll = false
  @Input() position: PositionTypes = PositionTypes.Absolute

  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>()

  @ViewChild('contextMenuPopover') popover!: ElementRef<HTMLElement>

  @ViewChild('contextMenuAnchor') anchor!: ElementRef<HTMLElement>

  isActive = false
  top = '0px'
  left = '0px'

  resizeObserver?: ResizeObserver
  menuCloseSubscription?: Subscription

  get isFixed(): boolean {
    return this.position === PositionTypes.Fixed
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    @Optional()
    @Inject(ON_SCROLL_TOKEN)
    public closeContextMenu: Subject<void>
  ) {}

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    console.log('[[ clickoutside ]]', this.isActive);
    if (this.isActive) {
      const contextMenuElement = this.elementRef.nativeElement

      if (!contextMenuElement.contains(target)) {
        this.close()
      }
    }
  }

  public ngOnInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.close()
    })
    this.resizeObserver.observe(document.body)
  }

  public ngAfterViewInit(): void {
    if (this.closeOnScroll) {
      this.menuCloseSubscription = this.closeContextMenu?.subscribe(() =>
        this.close()
      )
    }
  }

  public ngOnDestroy(): void {
    this.resizeObserver?.unobserve(document.body)
    this.menuCloseSubscription?.unsubscribe()
  }

  open(): void {
    if (this.isActive) {
      this.close()
      return
    }

    const anchor = this.anchor?.nativeElement
    const buttonRect = anchor.getBoundingClientRect()
    
    const left = this.calculateLeft(this.direction, buttonRect)
    const top = this.position === PositionTypes.Fixed ? buttonRect.bottom : anchor.clientHeight;
    const gapBetweenButtonAndPopover = 3

    this.left = `${left}px`
    this.top = `${top + gapBetweenButtonAndPopover}px`
    this.isActive = true
    console.log(
      anchor.getClientRects(),
      '[ sizesss ]',
      left,
      top,
      '[[ anchoreSizes ]]',
      anchor.getBoundingClientRect()
    )
    this.changeDetectorRef.detectChanges()
  }

  close(): void {
    this.isActive = false
    this.changeDetectorRef.markForCheck()
  }

  onItemClick(item: DropdownOption): void {
    this.contextMenuItemClicked.emit(item)
    this.close()
  }

  onMenuItemKeyDown(event: KeyboardEvent, menuItem: DropdownOption): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        this.onItemClick(menuItem)
        break
      default:
        break
    }
  }

  calculateLeft(direction: string, buttonRect: DOMRect): number {
    const popover = this.popover?.nativeElement
    const popoverWidth = popover?.offsetWidth || 0

    // if (this.position === 'absolute') {
    //   if(direction === 'rtl') {
    //     const elementWidth = buttonRect.width;
    //     if(elementWidth <= buttonRect.left) {
    //       return -popoverWidth+elementWidth;
    //     } else {
    //       return 0;
    //     }
    //   } else {
    //     const elementWidth = buttonRect.width;
    //     if(buttonRect.right + popoverWidth <= window.innerWidth) {
    //       return 0;
    //     } else {
    //       return -popoverWidth+elementWidth;
    //     }
    //   }
    // }

    if (this.position === 'absolute') {
      const elementWidth = this.anchor?.nativeElement.offsetWidth;
      // buttonRect.width;
      const elementRight = buttonRect.right;
      const windowWidth = window.innerWidth;
      const rtlDirection = direction === 'rtl';
    
      if ((rtlDirection && elementWidth <= buttonRect.left) || (!rtlDirection && elementRight + popoverWidth > windowWidth)) {
        return -popoverWidth + elementWidth;
      }
      return 0;
    }
    switch (direction) {
      case 'rtl':
        return popoverWidth <= buttonRect.left
          ? buttonRect.right - popoverWidth
          : buttonRect.left
      case 'ltr':
      default:
        return buttonRect.right + popoverWidth <= window.innerWidth
          ? buttonRect.left
          : buttonRect.right - popoverWidth
    }
  }
}
