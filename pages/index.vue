<template>
  <article class="contents" id="page_root">
    <!-- templateタグ内は1つの親要素で括る。（直下に複数要素を書くとエラーになる） -->
    <!-- class値は assets/scss/global.scss の共通定義を参照 -->
    <div class="container" v-bind:class="containerClass">
      <h1 class="page_title-main">index.vue</h1>
      <h3 class="page_title-sub">Hello, Nuxt3 + SCSS :)</h3>
      <p class="page_message mt-4">Message: {{ message }}</p>
      <div class="nav_links mt-8">
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
  .nav_link{
    &_text{
      font-weight: bold;
    }
  }
</style>
