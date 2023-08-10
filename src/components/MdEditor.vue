<template>
  <Editor
    :value="props.value"
    :locale="locale"
    :plugins="plugins"
    @change="props.handleChange"
  />
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Editor } from "@bytemd/vue-next";
import { withDefaults, defineProps } from "vue";
import locale from "../locales/zh_Hans.json";
import math from "@bytemd/plugin-math";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gfmLocale from "@bytemd/plugin-gfm/locales/zh_Hans.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mathLocale from "@bytemd/plugin-math/locales/zh_Hans.json";

interface Props {
  value: string;
  handleChange: (v: string) => void;
}

const plugins = [
  gfm({
    locale: gfmLocale,
  }),
  highlight(),
  math({
    locale: mathLocale,
  }),
  // Add more plugins here
];
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {
    console.log(v);
  },
});
</script>
<style>
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {
  display: none;
}
</style>
