import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-bankid
 */
@gdsCustomElement('gds-icon-bankid')
export class IconBankid extends GdsIcon {
  /** @private */
  static _regularSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.69277 18.3777C8.27482 18.3777 8.78717 18.615 8.68874 19.247L8.57782 19.9599C8.53864 20.2121 8.54593 20.2877 8.82677 20.2928L8.54133 20.9628C8.04463 20.996 7.80453 20.9437 7.68495 20.7298C7.42143 20.8916 7.13181 20.9722 6.8217 20.9722C6.25864 20.9722 6.06512 20.6825 6.11524 20.3593C6.13889 20.2069 6.2292 20.0552 6.3726 19.9314C6.68122 19.6654 7.44592 19.6269 7.74516 19.423C7.77096 19.1949 7.67844 19.1138 7.39694 19.1138C7.06766 19.1138 6.79291 19.2234 6.32327 19.5417L6.43795 18.8047C6.84637 18.5105 7.23914 18.3777 7.69277 18.3777ZM4.96841 17.6883C5.7797 17.6883 5.97865 18.0973 5.92024 18.4722C5.87288 18.7769 5.66616 18.9999 5.30456 19.1473C5.75999 19.3185 5.9375 19.5893 5.87228 20.0074C5.79045 20.5351 5.32834 20.9295 4.72681 20.9295H2.56006L3.06398 17.6883H4.96841ZM11.2796 18.3777C11.8333 18.3777 12.0913 18.715 12.0046 19.2709L11.7467 20.9295H10.7539L10.9676 19.556C11.0065 19.3044 10.9338 19.1901 10.7382 19.1901C10.5809 19.1901 10.4385 19.2757 10.2999 19.4606L10.0716 20.9295H9.07896L9.46905 18.42H10.4617L10.4106 18.748C10.7242 18.482 10.9646 18.3777 11.2796 18.3777ZM13.7609 17.6883L13.5125 19.2851L14.463 18.42H15.6896L14.4687 19.4895L15.4476 20.9295H14.2019L13.4467 19.7697H13.4372L13.2569 20.9295H12.2641L12.7681 17.6883H13.7609ZM17.4197 17.6883L16.9158 20.9295H15.7755L16.2793 17.6883H17.4197ZM19.6063 17.6883C20.8661 17.6883 21.2301 18.6007 21.1135 19.3516C20.999 20.0881 20.4146 20.9294 19.3073 20.9294H17.4701L17.974 17.6883H19.6063ZM7.67993 19.8409C7.41528 20.0074 6.92819 19.9789 6.87522 20.321C6.84989 20.4829 6.95077 20.6014 7.11299 20.6014C7.27062 20.6014 7.46234 20.5351 7.61214 20.4306C7.60193 20.3735 7.60677 20.3117 7.62439 20.1976L7.67993 19.8409ZM4.29092 19.5276H3.91881L3.77756 20.4353H4.12111C4.50301 20.4353 4.72705 20.2832 4.77675 19.9647C4.81897 19.6938 4.6632 19.5276 4.29092 19.5276ZM19.3001 18.4579H18.9946L18.7301 20.1596H19.031C19.5844 20.1596 19.8891 19.8887 19.9795 19.3091C20.0456 18.8812 19.9156 18.4579 19.3001 18.4579ZM4.4572 18.1823H4.12792L3.9955 19.0331H4.32472C4.69701 19.0331 4.8707 18.8381 4.90689 18.6054C4.94518 18.3584 4.82949 18.1823 4.4572 18.1823ZM7.41626 4.79114C7.77624 4.79114 8.0544 4.86608 8.19864 5.00252C8.2994 5.09804 8.33703 5.22312 8.30735 5.36509C8.27838 5.50153 8.12512 5.67955 7.89492 5.84002C7.24299 6.29781 7.35588 6.77208 7.40623 6.9068C7.5448 7.27819 7.97944 7.49281 8.35662 7.526L8.4578 7.53053H9.30027L8.51442 12.4774H8.52786C8.24724 14.252 8.03532 15.6076 7.9831 15.9456L7.97741 15.9825H3.31485C3.40421 15.4013 4.57141 8.01444 4.6453 7.5319C4.95553 7.53262 5.50323 7.53363 5.50323 7.53363C6.06372 7.53053 6.58001 7.27484 6.81952 6.8817C7.05353 6.50057 6.96448 6.0916 6.58867 5.81462C6.46336 5.72249 6.31948 5.57332 6.34743 5.38847C6.38607 5.13896 6.81092 4.79114 7.41626 4.79114ZM14.758 3.19995C19.0614 3.19995 22.0618 5.08329 21.3157 9.783C20.7245 13.5012 17.7641 15.8857 14.1082 15.9796L13.8835 15.9825H12.992L13.5964 12.1536C15.119 12.1364 16.3946 11.4226 16.6579 9.76617C16.9318 8.04033 16.099 7.26789 14.5292 7.20805L14.3698 7.20443L14.3701 7.20026H13.1405C12.8571 7.20026 12.493 7.0439 12.3988 6.79166C12.3694 6.71332 12.3094 6.43182 12.7681 6.11017C12.9441 5.98681 13.2498 5.73451 13.3137 5.43278C13.3665 5.17983 13.2919 4.93585 13.1083 4.76295C12.8995 4.56572 12.5503 4.46087 12.0989 4.46087C11.3451 4.46087 10.7688 4.91486 10.7032 5.33827C10.699 5.36575 10.6963 5.39775 10.6963 5.43314C10.6963 5.60152 10.7622 5.84966 11.0749 6.08025C11.1895 6.16447 11.301 6.28919 11.301 6.45519C11.301 6.5315 11.2775 6.61602 11.2202 6.70952C11.0574 6.9763 10.6989 7.16448 10.3034 7.19828L10.1838 7.20371L9.37688 7.20199L10.0126 3.19995H14.758Z" fill="currentColor"/>`
  /** @private */
  static _solidSVG = `<path fill-rule="evenodd" clip-rule="evenodd" d="M7.69277 18.3777C8.27482 18.3777 8.78717 18.615 8.68874 19.247L8.57782 19.9599C8.53864 20.2121 8.54593 20.2877 8.82677 20.2928L8.54133 20.9628C8.04463 20.996 7.80453 20.9437 7.68495 20.7298C7.42143 20.8916 7.13181 20.9722 6.8217 20.9722C6.25864 20.9722 6.06512 20.6825 6.11524 20.3593C6.13889 20.2069 6.2292 20.0552 6.3726 19.9314C6.68122 19.6654 7.44592 19.6269 7.74516 19.423C7.77096 19.1949 7.67844 19.1138 7.39694 19.1138C7.06766 19.1138 6.79291 19.2234 6.32327 19.5417L6.43795 18.8047C6.84637 18.5105 7.23914 18.3777 7.69277 18.3777ZM4.96841 17.6883C5.7797 17.6883 5.97865 18.0973 5.92024 18.4722C5.87288 18.7769 5.66616 18.9999 5.30456 19.1473C5.75999 19.3185 5.9375 19.5893 5.87228 20.0074C5.79045 20.5351 5.32834 20.9295 4.72681 20.9295H2.56006L3.06398 17.6883H4.96841ZM11.2796 18.3777C11.8333 18.3777 12.0913 18.715 12.0046 19.2709L11.7467 20.9295H10.7539L10.9676 19.556C11.0065 19.3044 10.9338 19.1901 10.7382 19.1901C10.5809 19.1901 10.4385 19.2757 10.2999 19.4606L10.0716 20.9295H9.07896L9.46905 18.42H10.4617L10.4106 18.748C10.7242 18.482 10.9646 18.3777 11.2796 18.3777ZM13.7609 17.6883L13.5125 19.2851L14.463 18.42H15.6896L14.4687 19.4895L15.4476 20.9295H14.2019L13.4467 19.7697H13.4372L13.2569 20.9295H12.2641L12.7681 17.6883H13.7609ZM17.4197 17.6883L16.9158 20.9295H15.7755L16.2793 17.6883H17.4197ZM19.6063 17.6883C20.8661 17.6883 21.2301 18.6007 21.1135 19.3516C20.999 20.0881 20.4146 20.9294 19.3073 20.9294H17.4701L17.974 17.6883H19.6063ZM7.67993 19.8409C7.41528 20.0074 6.92819 19.9789 6.87522 20.321C6.84989 20.4829 6.95077 20.6014 7.11299 20.6014C7.27062 20.6014 7.46234 20.5351 7.61214 20.4306C7.60193 20.3735 7.60677 20.3117 7.62439 20.1976L7.67993 19.8409ZM4.29092 19.5276H3.91881L3.77756 20.4353H4.12111C4.50301 20.4353 4.72705 20.2832 4.77675 19.9647C4.81897 19.6938 4.6632 19.5276 4.29092 19.5276ZM19.3001 18.4579H18.9946L18.7301 20.1596H19.031C19.5844 20.1596 19.8891 19.8887 19.9795 19.3091C20.0456 18.8812 19.9156 18.4579 19.3001 18.4579ZM4.4572 18.1823H4.12792L3.9955 19.0331H4.32472C4.69701 19.0331 4.8707 18.8381 4.90689 18.6054C4.94518 18.3584 4.82949 18.1823 4.4572 18.1823ZM7.41626 4.79114C7.77624 4.79114 8.0544 4.86608 8.19864 5.00252C8.2994 5.09804 8.33703 5.22312 8.30735 5.36509C8.27838 5.50153 8.12512 5.67955 7.89492 5.84002C7.24299 6.29781 7.35588 6.77208 7.40623 6.9068C7.5448 7.27819 7.97944 7.49281 8.35662 7.526L8.4578 7.53053H9.30027L8.51442 12.4774H8.52786C8.24724 14.252 8.03532 15.6076 7.9831 15.9456L7.97741 15.9825H3.31485C3.40421 15.4013 4.57141 8.01444 4.6453 7.5319C4.95553 7.53262 5.50323 7.53363 5.50323 7.53363C6.06372 7.53053 6.58001 7.27484 6.81952 6.8817C7.05353 6.50057 6.96448 6.0916 6.58867 5.81462C6.46336 5.72249 6.31948 5.57332 6.34743 5.38847C6.38607 5.13896 6.81092 4.79114 7.41626 4.79114ZM14.758 3.19995C19.0614 3.19995 22.0618 5.08329 21.3157 9.783C20.7245 13.5012 17.7641 15.8857 14.1082 15.9796L13.8835 15.9825H12.992L13.5964 12.1536C15.119 12.1364 16.3946 11.4226 16.6579 9.76617C16.9318 8.04033 16.099 7.26789 14.5292 7.20805L14.3698 7.20443L14.3701 7.20026H13.1405C12.8571 7.20026 12.493 7.0439 12.3988 6.79166C12.3694 6.71332 12.3094 6.43182 12.7681 6.11017C12.9441 5.98681 13.2498 5.73451 13.3137 5.43278C13.3665 5.17983 13.2919 4.93585 13.1083 4.76295C12.8995 4.56572 12.5503 4.46087 12.0989 4.46087C11.3451 4.46087 10.7688 4.91486 10.7032 5.33827C10.699 5.36575 10.6963 5.39775 10.6963 5.43314C10.6963 5.60152 10.7622 5.84966 11.0749 6.08025C11.1895 6.16447 11.301 6.28919 11.301 6.45519C11.301 6.5315 11.2775 6.61602 11.2202 6.70952C11.0574 6.9763 10.6989 7.16448 10.3034 7.19828L10.1838 7.20371L9.37688 7.20199L10.0126 3.19995H14.758Z" fill="currentColor"/>`
  /** @private */
  static _name = 'bankid'
}