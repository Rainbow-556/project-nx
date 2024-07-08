<template>
  <Cart />
</template>

<script setup>
import Cart from './modules/cart/index.vue';
import { useInitService } from './useInitService';

useInitService();
</script>

<style scoped></style>
