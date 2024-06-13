<template>
  <div id="app">
    <home id="home-section"></home>
    <portfolio></portfolio>
  </div>
</template>

<script>
import Home from './Home.vue';
import Portfolio from './Portfolio.vue';

export default {
  components: {
    Home,
    Portfolio
  }
};
</script>

<style>
#app {
  scroll-behavior: smooth;
}
</style>
