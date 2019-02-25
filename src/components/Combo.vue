<template>
  <listOfProducts :products="getCombos" />
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
      'getCombos'
    ]),
  }
}
</script>

<style>
</style>
