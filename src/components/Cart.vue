<script setup>
import { onMounted } from "vue";
import { cart } from "../stores/cart";

const props = defineProps({
  addToCartInput: String,
});

const useCart = cart();

const addItem = () => {
  console.log("useCart", useCart.name, useCart.items, useCart.noItems, props.addToCartInput);
  useCart.addToCart(props.addToCartInput);
  console.log("adding item to cart", useCart.cart);
};

onMounted(() => {
  console.log("mounted cart", useCart.cartCount);
});
</script>

<template>
  <h3>Cart component</h3>
  <input v-model="addToCartInput" type="text" placeholder="add item" />
  <button @click="addItem">Add to Cart</button>
</template>
