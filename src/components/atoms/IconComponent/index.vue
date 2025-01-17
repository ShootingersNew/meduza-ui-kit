<template src="./view.html" />
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { EIconStylesVariable, IIconStylesVariables } from "./models";
import { getIcon } from "./utils";

export default defineComponent({
  name: "icon-component",
  props: {
    name: {
      type: String,
      required: true,
    },
    /**
     * set width and height of the icon in px
     */
    height: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
    isCurrentColor: {
      type: Boolean,
      default: false,
    },
    inline: Boolean,
  },
  setup(props) {
    const icon = ref("");

    const loadIcon = async () => {
      icon.value = await getIcon(props.name);
    };

    onMounted(loadIcon);
    const decodedIcon = computed(() => decodeURIComponent(icon.value));
    const stylesVariables = computed((): IIconStylesVariables => {
      const styles: IIconStylesVariables = {};

      if (props.width) {
        styles[EIconStylesVariable.CUSTOM_WIDTH] = `${props.width}px`;
      }
      const height = props.height || props.width;
      styles[EIconStylesVariable.CUSTOM_HEIGHT] = `${height}px`;

      if (props.isCurrentColor) {
        styles.fill = "currentColor";
      }

      return styles;
    });

    return {
      stylesVariables,
      decodedIcon,
    };
  },
});
</script>
<style lang="stylus" scoped src="./styles.styl" />

