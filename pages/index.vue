<template>
  <article class="contents" id="page_root">
    <!-- templateタグ内は1つの親要素で括る。（直下に複数要素を書くとエラーになる） -->
    <!-- class値は assets/scss/global.scss の共通定義を参照 -->
    <div class="container" v-bind:class="containerClass">
      <h1 class="page_title-main">index.vue</h1>
      <h3 class="page_title-sub">Hello, Nuxt3 + SCSS + TypeScript :)</h3>
      <p class="page_message">Message: {{ message }}</p>

      <div class="logoImage">
        <span class="logoImageCaption">Powered by</span>
        <img class="logoImageSource" src="../assets/images/logo-light.svg" alt="Nuxt.js Logo" width="100" />
      </div>

      <div class="nav_links">
        <NuxtLink to="/about" class="nav_link text_center">
          <p class="nav_link_text text_underline">link to: pages/about.vue</p>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  const containerClass: string = "page-index";
  const message: string = "Let's try edit ./pages/index.vue !";
  console.info("this page is 'pages/index.vue'.");
</script>

<style lang="scss" scoped>
  // このページ固有のスタイル定義
  @use "@/assets/scss/mixins" as m;
  .logoImage{
    @include m.flex(center, center);
    margin-top: 1rem;
    .logoImageCaption{
      margin-right: 0.5rem;
    }
  }
  .nav_link{
    .nav_link_text{
      font-weight: bold;
    }
  }
</style>
