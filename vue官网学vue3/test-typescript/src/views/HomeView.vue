<script setup lang="ts">
import TestProps from "@/components/TestProps.vue";
import {ref} from "vue";

const count = ref(0)
</script>

<template>
  <TestProps :count="count" @add="count++"/>
</template>