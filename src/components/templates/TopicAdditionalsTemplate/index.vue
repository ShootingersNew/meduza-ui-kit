<template src="./view.html" />
<script lang="ts" setup>
import { computed, type VNode } from "vue";

defineOptions({
  name: "TopicAdditionalsTemplate",
});

const slots = defineSlots<{
  default?: () => VNode | VNode[];
  additionalsMain?: () => VNode | VNode[];
  additionalsSecondary?: () => VNode | VNode[];
  additionalsFooter?: () => VNode | VNode[];
}>();

const hasAdditionals = computed(
  () =>
    Boolean(
      slots.additionalsMain ||
        slots.additionalsSecondary ||
        slots.additionalsFooter
    )
);

defineExpose({
  hasAdditionals,
  slots,
});
</script>
