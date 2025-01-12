<template>
  <button :class="['button', size, color]" :disabled="disabled">
    <slot name="left-icon"></slot>
    <slot></slot>
    <slot name="right-icon"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "medium" | "large">,
      default: "medium",
    },
    color: {
      type: String as PropType<"primary" | "secondary" | "tertiary">,
      default: "primary",
    },
  },
});
</script>

<style scoped>
.button {
  color: #ffffff;
  outline: none;
  border: none;
  padding: 0 16px;
}

.small {
  height: 32px;
  border-radius: 8px;
}

.medium {
  height: 36px;
  border-radius: 10px;
}

.large {
  height: 40px;
  border-radius: 12px;
}

.primary {
  background: #535bf2;
}

.secondary {
  background: #a7a7a7;
}
</style>
