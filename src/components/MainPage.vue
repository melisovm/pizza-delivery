<template>
  <div class="full">
    <h1 class="title has-text-centered">Добро пожаловать в нашу пиццерию!</h1>
    <h3 class="subtitle"> <strong>Новости и Акции</strong></h3>
    <div class="banners">

      <div
        class="box"
        v-for="(news, index) in this.getNewsOrSales"
        :key="index"
      >
        <article class="media ">
          <div class="media-left">
            <figure class=""></figure>
            <img
              :src="news.image"
              class="image is-64x64 is-rounded"
            >
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{news.name}}</strong><br>
                {{news.description}}
              </p>
            </div>
          </div>
        </article>
      </div>
      <h3 class="subtitle"> <strong>Мы в соц. сетях</strong></h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getNewsOrSales']),
  }
}
</script>

<style scoped>
.full {
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 23%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(23%, rgba(246, 246, 246, 1)),
    color-stop(100%, rgba(237, 237, 237, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 23%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 23%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 23%,
    rgba(237, 237, 237, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 23%,
    rgba(237, 237, 237, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
  height: 100vh;
}
h1.title {
  margin-top: 0;
  padding: 1rem 0.5rem 0 0.1rem;
  font-size: 2rem;
}
.box,
.subtitle {
  margin: 1em 0.5em 1em 0.5em;
}
.is-rounded {
  border-radius: 50%;
}
</style>
