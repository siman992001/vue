<script setup>
import {ref, onMounted} from 'vue'

const count = ref(0)

function increment(){
    count.value++
}

onMounted(() => {
    console.log(`The initial count is ${count.value}`)
})

</script>

<template>
    <h2>Count: {{count}}</h2>
    <button @click="increment">Increment</button>
</template>