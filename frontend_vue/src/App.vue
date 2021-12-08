<template>
  <div id="app">
    <router-view path="$router.key" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
@import "./assets/app.css";
</style>