<script>
/* eslint-disable */
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import HolocronPage from './components/HolocronPage.vue'
import VoicePage from './components/VoicePage.vue'

const routes = {
  '': Home,
  '/': Home,
  '#/': Home,
  '/Gallery': Gallery,
  '/HolocronPage': HolocronPage,
  '/VoicePage': VoicePage
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template> 
  <component :is="currentView" />
</template>

<style>
  html, body {
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: black;
    color: white;
  }
</style>