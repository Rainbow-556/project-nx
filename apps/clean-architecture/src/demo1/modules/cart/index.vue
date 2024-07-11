<template>
  <div>goods count: {{ cartServiceState.goodsList.length }}</div>
  <div>total price: {{ orderServiceState.totalPrice }}</div>
  <button @click="onAddBtnTap">add</button>
  <button @click="onSubmitBtnTap">submit</button>
</template>

<script setup>
import { usePresenter } from './usePresenter';

const { cartServiceState, orderServiceState, onAddBtnTap, onSubmitBtnTap } = usePresenter();
</script>

<style scoped></style>
