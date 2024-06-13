<template>
  <div id="app">
    <video autoplay muted loop id="backgroundVid">
        <source src="@/assets/stars2.mp4" type="video/mp4">
    </video>
    <home></home>
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
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth; /* Ensure smooth scrolling is enabled */
    }

    #home-section, #portfolio-section {
        min-height: 100vh;
        width: 100%;
    }

    #backgroundVid {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
</style>
