<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
  data() {
    return {
      title: 'Vue Ninjas'
    }
  },
  methods: {
    changeTitle: function () {
      this.title = 'Vue Wizards';
      bus.$emit('titleChanged', this.title);
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
