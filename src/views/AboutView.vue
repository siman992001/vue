<template>
  <div>{{user.name}}</div>
  <div class="about">
    <h1 ref="appTitleRef">{{ preTitle }} {{ authStore?.user?.email }}</h1>
  </div>
  <button @click="changeTitle">Change Title</button>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { userStore } from "../stores/user";
import { onMounted, ref, nextTick } from "vue";

const user = userStore();
const authStore = useAuthStore();
const appTitleRef = ref(null);
const preTitle = ref("This is an about page");

onMounted(() => {
  //console.log('onMounted')
  console.log(`App title ref is ${appTitleRef.value.offsetWidth} px wide`);
});

const changeTitle = () => {
  preTitle.value = "Change to something else";
  nextTick(() => console.log("after dom updated"));
};
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
