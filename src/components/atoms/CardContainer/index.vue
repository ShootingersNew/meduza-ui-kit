<template>
  <component
    :is="tag"
    class="card palette-bg-white"
    :class="maxWidthClasses"
    :style="maxWidthStyles"
    :role="role"
    :aria-label="ariaLabel"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MaxWidthBreakpoints } from "../../../types/common";

defineOptions({ name: "CardContainer" });

interface Props {
  tag?: "article" | "section" | "aside" | "figure" | "div";
  role?: string;
  ariaLabel?: string;
  /**
   * Max width for the card. Can be a single value or responsive object
   * @example '320px'
   * @example { xs: '100%', md: '400px', lg: '500px' }
   */
  maxWidth?: string | MaxWidthBreakpoints;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "section",
});

const tag = props.tag;
const role = props.role;
const ariaLabel = props.ariaLabel;

// Compute max-width classes and styles
const maxWidthClasses = computed(() => {
  if (!props.maxWidth) return "";

  // If it's an object, we'll use CSS custom properties
  if (typeof props.maxWidth === "object") {
    return "card--responsive-width";
  }

  return "";
});

const maxWidthStyles = computed(() => {
  if (!props.maxWidth) return {};

  // Single value - apply directly
  if (typeof props.maxWidth === "string") {
    return { "max-width": props.maxWidth };
  }

  // Responsive object - use CSS custom properties for media queries
  const breakpoints = props.maxWidth as MaxWidthBreakpoints;
  return {
    "--card-max-width-xs": breakpoints.xs || "none",
    "--card-max-width-sm": breakpoints.sm || breakpoints.xs || "none",
    "--card-max-width-md":
      breakpoints.md || breakpoints.sm || breakpoints.xs || "none",
    "--card-max-width-lg":
      breakpoints.lg ||
      breakpoints.md ||
      breakpoints.sm ||
      breakpoints.xs ||
      "none",
    "--card-max-width-xl":
      breakpoints.xl ||
      breakpoints.lg ||
      breakpoints.md ||
      breakpoints.sm ||
      breakpoints.xs ||
      "none",
  };
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive max-width support */
.card--responsive-width {
  max-width: var(--card-max-width-xs);
}

@media (min-width: 768px) {
  .card--responsive-width {
    max-width: var(--card-max-width-sm);
  }
}

@media (min-width: 992px) {
  .card--responsive-width {
    max-width: var(--card-max-width-md);
  }
}

@media (min-width: 1200px) {
  .card--responsive-width {
    max-width: var(--card-max-width-lg);
  }
}

@media (min-width: 1440px) {
  .card--responsive-width {
    max-width: var(--card-max-width-xl);
  }
}
</style>
