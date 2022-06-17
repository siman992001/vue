<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const count = ref(0);
const msg = '<span style="color: red">This should be red</span>';

const increment = () => {
  count.value++;
};

onMounted(() => {
  console.log(`count comp mounted ${count.value}`);
});

onUnmounted(() => {
  console.log("count comp onMounted");
});
</script> 

<template>
  <p>Using text interpolation directive {{msg}}</p>
  <p>Using v-html directive <span v-html="msg"></span></p>
  <button @click="increment">Count is {{ count }}</button>
</template>