<template src="./view.html" />
<script lang="ts" setup>
import { type VNode } from "vue";
defineOptions({
  name: "topic-additionals-template-component",
});
defineSlots<{
  default: () => VNode[];
  additionalsMain: () => VNode[];
  additionalsSecondary: () => VNode[];
  additionlsFooter: () => VNode[];
}>();
</script>
