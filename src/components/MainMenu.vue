<template>
  <div class="container">
    <div class="menu-title">
      <h3 class="menu-title-text">
        Меню
      </h3>
    </div>
    <div
      class="menu-items"
      v-for="category in getCategories"
      :key="category._id"
    >
      <router-link
        :to="{ name: 'Products', params: { category: category.code } }"
        v-if="getCategoryProducts(category.code).length > 0"
      >
        <div class="box">
          <div class="menuImage">
            <img
              src="src/assets/favicon.png"
              alt=""
              class="menu-image"
            >
          </div>
          <div class="menu-content">
            <h3>{{category.name}}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCategories', 'getCategoryProducts'])
  },
  mounted () {
    this.$store.dispatch('fetchProduct');
    this.$store.dispatch('fetchCategories');
  }
}
</script>

<style scoped>
.menu-title {
  margin-top: 1rem;
}
.menu-title-text {
  text-align: center;
  font-size: 2rem;
  font-weight: 450;
}
.menu-image {
  width: 3rem;
  height: 3rem;
}
.box {
  display: grid;
  grid-template-columns: 4rem 1fr;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0.5em 0.3em 0.5em;
}
.menu-content {
  font-size: 1.2rem;
}
</style>
