<template>
  <div id="app">
    <div class="head_contact">
      <span>HANANOI紹介</span>
      <span class="ml-5">電話: 0387403653</span>
    </div>
    <NavBar />
    <router-view>
      <HomePage />
    </router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HomePage,
  },
};
</script>

<style>
@import "./assets/styles/style.css";
@import url("https://fonts.googleapis.com/css2?family=Nerko+One&display=swap");
</style>
