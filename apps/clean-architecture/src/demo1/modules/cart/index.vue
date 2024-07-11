<template>
  <div>goods count: {{ cartServiceState.goodsList.length }}</div>
  <div>total price: {{ orderServiceState.totalPrice }}</div>
  <button @click="onAddBtnTap">add</button>
</template>

<script setup>
import { usePresenter } from './usePresenter';

const { cartServiceState, orderServiceState, onAddBtnTap } = usePresenter();
</script>

<style scoped></style>
