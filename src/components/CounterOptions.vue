<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    console.log(`The initial count is ${this.count}`);
  },
};
</script>

<template>
  <h2>Count: {{ count }}</h2>
  <button @click="increment">Increment</button>
</template>