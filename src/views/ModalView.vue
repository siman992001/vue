<template>
  <div>
    <div><h2>Title by Props</h2></div>
    <div>
      <label
        >Show Dark Modal <input type="checkbox" v-model="darkModal"
      /></label>
    </div>
    <pre>{{darkModal}}</pre>
    <div><button @click="showModal = true">Show Modal</button></div>
    <component :is="darkModal?DarkModal:Modal" v-model="showModal" title="Modal Title">
      <p>This is a modal</p></component
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import DarkModal from "@/components/ModalDark.vue";
const showModal = ref(false);
const darkModal = ref(false);
</script>



