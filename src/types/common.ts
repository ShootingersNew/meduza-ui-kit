/**
 * Responsive breakpoint configuration for max-width
 * Follows standard breakpoint conventions:
 * - xs: 0-767px (mobile)
 * - sm: 768-991px (tablet portrait)
 * - md: 992-1199px (tablet landscape)
 * - lg: 1200-1439px (desktop)
 * - xl: 1440px+ (large desktop)
 * 
 * @example
 * ```ts
 * const maxWidth: MaxWidthBreakpoints = {
 *   xs: '100%',
 *   md: '400px',
 *   lg: '500px'
 * }
 * ```
 */
export interface MaxWidthBreakpoints {
	xs?: string
	sm?: string
	md?: string
	lg?: string
	xl?: string
}
