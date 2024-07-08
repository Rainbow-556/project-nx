<template>
  <div>goods count: {{ cartState.goodsList.length }}</div>
  <div>total price: {{ orderState.totalPrice }}</div>
  <button @click="cartService.addGoods({ goods: { goodsId: 'goodsId', price: 2 } })">add</button>
</template>

<script setup>
import { useService } from '../../useService';

const { service: cartService, state: cartState } = useService({ name: 'cart' });

const { service: orderService, state: orderState } = useService({ name: 'order' });
</script>

<style scoped></style>
