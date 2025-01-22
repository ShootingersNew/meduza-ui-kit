<template src="./view.html" />
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ELinkTarget, ELinkTheme } from "./models";

export default defineComponent({
  name: "link-component",
  props: {
    theme: {
      type: String as PropType<ELinkTheme>,
      default: ELinkTheme.Black,
    },
    href: {
      type: String,
      default: "#",
    },
    target: {
      type: String as PropType<ELinkTarget>,
      default: ELinkTarget.Self,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    const classList = computed(() => ({
      link: true,
      "link--secondary": props.theme === ELinkTheme.Black,
      "link--black": props.theme === ELinkTheme.Black,
      "link--firm": props.theme === ELinkTheme.Firm,
      "link--blue": props.theme === ELinkTheme.Blue,
      "link--disabled": props.disabled,
    }));

    return {
      ELinkTheme,
      ELinkTarget,
      classList,
    };
  },
});
</script>
<style lang="stylus" scoped src="./styles.styl" />
