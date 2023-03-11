<template>
    <component :is="props.icon" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    icon: any;
}>();
</script>

<style lang="scss" scoped></style>
