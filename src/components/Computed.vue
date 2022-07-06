<script setup>
import { reactive, computed } from "vue";
const person = reactive({
  name: "Ramon Lewis",
  cars: ["BMW", "Tesla", "Honda", "Volvo", "Audi"],
});

const owns_cars = computed(()=>{
    return person.cars.length > 0 ? "Owns " + person.cars.length + " cars" : "No Cars"
})
</script>

<template>
  <h1>{{ person.name }}</h1>
  <h2>{{owns_cars}}</h2>
</template>