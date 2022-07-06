<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";

const count = ref(0);
const my_obj = reactive({name: 'Ramon', age: 0, address: '6102 SW 164 CT, Miami FL 33193'});
const msg = '<span style="color: red">This should be red</span>';
const my_id = 5;
const showMe = true;
const my_url_title = 'Click Me';
const my_url = 'https://www.youtube.com/watch?v=gh-4hjNU3b4&t=19s'
const my_href = 'href';

const objectOfAttrs = {
  id: 1,
  disabled: true,
};

const isButtonDisabled = () => {
  return true;
};

const changeMyObj = () =>{
  my_obj.address = '855 NW 201 ST, Miami FL 33169'
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
  <a v-bind:href="my_url">{{my_url_title}}</a>
  <p>Using text interpolation directive {{ msg }}</p>
  <p>Using v-html directive <span v-html="msg"></span></p>
  <button v-bind="objectOfAttrs" @click="increment">
    Count is {{ count }}
  </button>
  <div :id="my_id">My ID</div>
  <div v-if="showMe">{{ "my name is ramon lewis".split(" ")[3] }}</div>
  <a :[my_href]="my_url">{{'Hardcoded link'}}</a>
  <br>
  <button @click="changeMyObj">Change Object</button>
  <p>{{my_obj.address}}</p>
</template>