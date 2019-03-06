<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav';
import 'bulma/css/bulma.css'

export default {
  name: 'app',
  components: {
    MainNav
  }
}
</script>

<style>
</style>
