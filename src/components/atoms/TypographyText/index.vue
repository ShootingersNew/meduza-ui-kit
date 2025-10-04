<template>
  <component
    :is="tag"
    class="typography-text"
    :class="[sizeClass, toneClass, { 'typography-text--caption': isCaption }]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "TypographyText" });

type TextSize = "default" | "large" | "medium" | "small" | "caption";
type TextTag = "p" | "span" | "div" | "small" | "time";

const props = withDefaults(
  defineProps<{
    readonly size?: TextSize;
    readonly tag?: TextTag;
  }>(),
  {
    size: "default",
    tag: "p",
  }
);

const sizeClass = computed(() => {
  switch (props.size) {
    case "large":
      return "text-large";
    case "medium":
      return "text-medium";
    case "small":
      return "text-small";
    case "caption":
      return "text-smallest";
    case "default":
    default:
      return "text-default";
  }
});

const toneClass = computed(() =>
  props.size === "caption" ? "palette-color-secondary" : "palette-color-primary"
);
const isCaption = computed(() => props.size === "caption");
const tag = computed(() => props.tag);
</script>

<style scoped>
.typography-text {
  margin: 0;
  line-height: 1.5;
}

.typography-text--caption {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
