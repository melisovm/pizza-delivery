<template>
  <listOfProducts :products="getPizzas" />
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },
  computed: {
    ...mapGetters([
      'getPizzas'
    ]),
  }
}
</script>

<style>
</style>
