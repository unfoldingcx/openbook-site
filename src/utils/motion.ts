/**
 * Shared animation configurations for Motion One
 * Following Apple HIG motion principles: clarity, deference, depth
 */

/**
 * Apple's recommended easing curve for smooth, natural motion
 * Similar to iOS spring animations
 */
export const appleEasing = [0.25, 0.1, 0.25, 1] as const

/**
 * Standard fade-in with upward slide animation
 * Use for elements entering the viewport
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
}

/**
 * Fade-in only (no vertical movement)
 * Use for subtle elements
 */
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
}

/**
 * Stagger container for animating children sequentially
 * Use for lists, grids, cards
 */
export const staggerContainer = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
}

/**
 * Scale-in animation
 * Use for cards, images, important elements
 */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
}

/**
 * Variants (named exports for Motion variants)
 */
export const fadeInUpVariants = fadeInUp
export const fadeInVariants = fadeIn
export const staggerContainerVariants = staggerContainer
export const scaleInVariants = scaleIn

/**
 * Default transition settings
 */
export const defaultTransition = {
  duration: 0.4,
  ease: appleEasing,
} as const

/**
 * Page transition settings
 * Use with AnimatePresence for route changes
 */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: appleEasing },
}

/**
 * Hover animation for interactive elements
 * Subtle scale and shadow
 */
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 } as const,
}

/**
 * Button press feedback
 * Immediate tactile response
 */
export const buttonPress = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.1 } as const,
}

/**
 * Check if user prefers reduced motion
 * Always check this before applying animations
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches

}

/**
 * Get viewport settings that respect reduced motion preference
 */
export function getViewportSettings(margin = "-50px") {
  if (prefersReducedMotion()) {
    return { once: true }
  }
  return { once: true, margin }
}
