<template>
  <listOfProducts :products="getDesserts" />
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
      'getDesserts'
    ]),
  }
}
</script>

<style>
</style>
