<template>
  <MdEditor :value="value" :handle-change="handleChange" />
</template>
<script setup lang="ts">
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";

const value = ref<string>("");
const handleChange = (v: string) => {
  value.value = v;
};
</script>

<style scoped></style>
