<template>
  <component
    :is="tag"
    class="card palette-bg-white"
    :role="role"
    :aria-label="ariaLabel"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineOptions({ name: "CardContainer" });

interface Props {
  tag?: "article" | "section" | "aside" | "figure" | "div";
  role?: string;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "section",
});

const tag = props.tag;
const role = props.role;
const ariaLabel = props.ariaLabel;
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
</style>
