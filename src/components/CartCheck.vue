<template>
  <div>
    <div class="panel">
      <ul>
        <li
          v-for="(product, index) in getProductsInCart"
          :key="index"
        >
          <h3>{{product.name}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getProductsInCart']),
  },
  methods: {
    ...mapActions(['removeProduct']),

  }
}
</script>

<style>
</style>
