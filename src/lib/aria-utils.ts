/**
 * ARIA Accessibility Utilities
 *
 * These utilities ensure ARIA attributes render with valid string values
 * that satisfy both runtime accessibility AND static analysis tools.
 *
 * @see https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value
 */

/** Valid aria-expanded values */
export type AriaExpanded = "true" | "false";

/** Valid aria-hidden values */
export type AriaHidden = "true" | "false";

/** Valid aria-pressed values */
export type AriaPressed = "true" | "false" | "mixed";

/** Valid aria-checked values */
export type AriaChecked = "true" | "false" | "mixed";

/** Valid aria-haspopup values */
export type AriaHasPopup = "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog";

/**
 * Converts boolean to aria-expanded string value
 * @example ariaExpanded(isOpen) // returns "true" or "false"
 */
export function ariaExpanded(value: boolean): AriaExpanded {
  return value ? "true" : "false";
}

/**
 * Converts boolean to aria-hidden string value
 * @example ariaHidden(!isVisible) // returns "true" or "false"
 */
export function ariaHidden(value: boolean): AriaHidden {
  return value ? "true" : "false";
}

/**
 * Converts boolean to aria-pressed string value
 * @example ariaPressed(isActive) // returns "true" or "false"
 */
export function ariaPressed(value: boolean | "mixed"): AriaPressed {
  if (value === "mixed") return "mixed";
  return value ? "true" : "false";
}

/**
 * Converts boolean to aria-checked string value
 * @example ariaChecked(isChecked) // returns "true" or "false"
 */
export function ariaChecked(value: boolean | "mixed"): AriaChecked {
  if (value === "mixed") return "mixed";
  return value ? "true" : "false";
}

/**
 * Type-safe aria-haspopup value
 * @example ariaHasPopup("menu") // returns "menu"
 */
export function ariaHasPopup(value: AriaHasPopup | boolean): AriaHasPopup {
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return value;
}
