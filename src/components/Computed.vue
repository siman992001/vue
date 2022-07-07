<script setup>
import { reactive, computed } from "vue";
const person = reactive({
  name: "Ramon Lewis",
  cars: ["BMW", "Tesla", "Honda", "Volvo", "Audi"],
});

const owns_cars = computed(() => {
  return person.cars.length > 0
    ? "Owns " + person.cars.length + " cars"
    : "No Cars";
});

const my_cars = computed({
  get() {
    return person.cars.length > 0
      ? "Owns " + person.cars.length + " cars"
      : "No Cars";
  },
  set(value) {
    person.cars.push(value);
  },
});

const changeMe = () => {
  my_cars.value = "Porsche";
};
</script>

<template>
  <h1>{{ person.name }}</h1>
  <h2>Computed property:</h2>
  <h4>{{ owns_cars }}</h4>
  <h2>Method:</h2>
  <h4>{{ my_cars }}</h4>
  <button @click="changeMe">Click to change</button>
</template>