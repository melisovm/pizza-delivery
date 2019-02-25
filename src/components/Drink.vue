<template>
  <listOfProducts :products="getDrinks" />
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
      'getDrinks'
    ]),
  }
}
</script>

<style>
</style>
