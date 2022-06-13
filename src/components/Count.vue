<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    console.log("count mounted");
  },
  unmounted(){
     console.log("count unmounted"); 
  }
};
</script>

<template>
  <button @click="increment">Count is {{ count }}</button>
</template>
