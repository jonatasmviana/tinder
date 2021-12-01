<template>
  <div class="login-container">
    <form onSubmit="{handleSubmit}">
      <img
        :src="logo"
        alt="deu ruim"
      />

      <input
        value=""
        onChange=""
        placeholder="Digite seu usuario do github"
      />

      <button type="submit">ENTRAR</button>
    </form>
  </div>
</template>

<script>
import logo from "../../assets/logo.svg";

export default {
  name: "Login",
  data: () => {
    return {
      logo: logo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./Login.css";
</style>
