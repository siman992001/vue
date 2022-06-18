<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const count = ref(0);
const msg = '<span style="color: red">This should be red</span>';
const my_id = 5;

const isButtonDisabled = () =>{
  return true;
}

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
  <button :disabled="isButtonDisabled" @click="increment">Count is {{ count }}</button>
  <div :id="my_id">My ID</div>
  <div>{{"my name is ramon lewis".split(" ")[3]}}</div>
</template>