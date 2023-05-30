import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  InjectionToken,
  OnDestroy,
} from '@angular/core'
import { Subject, fromEvent } from 'rxjs'
import { takeUntil, throttleTime } from 'rxjs/operators'

export const ON_SCROLL_TOKEN = new InjectionToken<string>('ON_SCROLL_TOKEN')

@Directive({
  selector: '[nggOnScroll]',
  providers: [
    {
      provide: ON_SCROLL_TOKEN,
      useFactory: (component: NggOnScrollDirective): Subject<unknown> =>
        component?.onScroll$,
      deps: [NggOnScrollDirective],
    },
  ],
})
export class NggOnScrollDirective implements AfterViewInit, OnDestroy {
  onScroll$ = new Subject()
  destroy$ = new Subject()

  scrollDocument$ = new Subject();

  scrollSubscription = this.scrollDocument$
    .pipe(throttleTime(1000), takeUntil(this.destroy$))
    .subscribe(this.onScroll$);

  @HostListener('window:scroll', ['$event'])
  public onDocumentScroll(): void {
    this.scrollDocument$.next({});
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public ngAfterViewInit(): void {
    if (this.elementRef) {
      fromEvent(this.elementRef?.nativeElement, 'scroll')
        .pipe(
          takeUntil(this.destroy$),
          throttleTime(1000)
        )
        .subscribe(() => {
          this.onScroll$.next()
        })
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
  }
}
