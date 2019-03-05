<template>
  <div class="main">
    <div class="menu-title">
      <h3 class="menu-title-text">
        Меню
      </h3>
    </div>
    <div class="menu-items">
      <router-link to='/pizzas'>
        <div class="box">
          <div class="menuImage">
            <img
              src="../assets/menu/menu-pizza2.png"
              alt=""
              class="menu-image"
            >
          </div>
          <div class="menu-content">
            <h3>Пиццы</h3>
          </div>
        </div>
      </router-link>
      <router-link to='/combo'>
        <div class="box">
          <div class="menuImage">
            <img
              src="../assets/menu/menu-combo.png"
              alt=""
              class="menu-image"
            >
          </div>
          <div class="menu-content">
            <h3>Комбо</h3>
          </div>
        </div>
      </router-link>
      <router-link to='/drink'>
        <div class="box">
          <div class="menuImage">
            <img
              src="../assets/menu/menu-drink.png"
              alt=""
              class="menu-image"
            >
          </div>
          <div class="menu-content">
            <h3>Напитки</h3>
          </div>
        </div>
      </router-link>
      <router-link to='/dessert'>
        <div class="box">
          <div class="menuImage">
            <img
              src="../assets/menu/menu-dessert.png"
              alt=""
              class="menu-image"
            >
          </div>
          <div class="menu-content">
            <h3>Дессерты</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

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
  width: 5rem;
  height: 5rem;
}
.box {
  display: grid;
  grid-template-columns: 7rem 1fr;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0.5em 0.3em 0.5em;
}
.menu-content {
  font-size: 2rem;
}
</style>
