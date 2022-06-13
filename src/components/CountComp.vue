<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value ++;
};

onMounted(() => {
  console.log(`count comp mounted ${count.value}`);
});

onUnmounted(() => {
  console.log("count comp onMounted");
});
</script> 

<template>
  <button @click="increment">Count is {{ count }}</button>
</template>