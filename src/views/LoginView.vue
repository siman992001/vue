<template>
  <!-- <Login /> -->
  <h1>{{ counterData.title }}</h1>
  <h2>{{ name }}</h2>
  <button @click="handleClick('Lewis', $event)">Test Method</button>
  <h2>{{ counterData.count }}</h2>
  <input v-model="name" type="text" />
</template>


<script setup>
import Login from "@/components/Login.vue";
import { reactive, onBeforeUpdate, onUpdated, onMounted } from "vue";
const name = "Default non reactive";
const counterData = reactive({
  count: 10,
  title: "Hello title",
});
// onActivated(()=>{console.log("On Activated")});
// onDeactivated(()=>{console.log('on deactivated')});
// onBeforeUnmount(()=>{console.log("On Before UN mount")})
// onUnmounted(()=>{console.log("On UN mount")});
onMounted(()=>{console.log("On mount 1")});
// onBeforeMount(()=>{console.log("On before mount")});
// const nameLength = computed(() => {
//   return name.value.length;
// });

onMounted(()=>{console.log("On mount 2")});

const handleClick = (lname, e) => {
  //console.log(count.value);
  counterData.title += lname;
};

// watch(count, (newC, oldC) => {
//   console.log(newC, oldC);
// });
</script>


<!--
<script>
export default {
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("UN-mounted");
  },
};
</script>
-->



