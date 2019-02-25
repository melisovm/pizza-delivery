<template>
  <div class="navbar is-primary">
    <div class="navbar-brand">
      <strong class="navbar-item"> Please,Choose category</strong>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          to="/pizzas"
        >Пиццы</router-link>
        <router-link
          class="navbar-item"
          to="/combo"
        >Комбо</router-link>
        <router-link
          class="navbar-item"
          to="/drink"
        >Напитки</router-link>
        <router-link
          class="navbar-item"
          to="/dessert"
        >Дессерты</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link
            to="/cart"
            class="button is-primary is-inverted"
          ><span> Корзина</span>
            <span class="icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.is-vertical-center {
  display: flex;
  align-items: center;
}
</style>
