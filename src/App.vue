<template>
  <div id="app">
    <main-menu></main-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';

export default {
  name: 'app',
  components: {
    MainMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
