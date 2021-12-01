<template>
  <div id="app">
    <!-- <Login /> -->
    <Main />
  </div>
</template>

<script>
// import Login from "./components/login/Login.vue";
import Main from "./components/main/Main.vue";

export default {
  name: "App",
  components: {
    // Login,
    Main,
  },
};
</script>

<style scoped>
@import "./assets/app.css";
</style>