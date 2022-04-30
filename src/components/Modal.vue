<template>
  <div v-if="modelValue" class="modal">
      <h1>{{myprops.title}}</h1>
    <slot />
    <button @click="$emit('update:modelValue', false)">Hide Modal</button>
  </div>
</template>

<script setup>
//import {inject} from 'vue'

//const userData = inject('userData');

const myprops = defineProps({
    modelValue:{
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        default: 'My default'
    }
});

const myEmits = defineEmits(['update:modelValue']);

// const handleHideModal = () =>{
//     myEmits('hideModal')
// }

</script>

<style>
.modal {
  background: beige;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
