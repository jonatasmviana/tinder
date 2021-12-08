<template>
  <div class="login-container">
    <form v-on:submit.prevent="handleSubmit">
      <img
        :src="logo"
        alt="deu ruim"
      />

      <input
        type="text"
        v-model="user"
        placeholder="Digite seu usuario do github"
      />

      <button type="submit">ENTRAR</button>
    </form>
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";
import service from "../../services/api.js";

export default {
  name: "Login",
  data: () => {
    return {
      logo: logo,
      user: "",
    };
  },
  mounted: async function () {
    const currentDevId = localStorage.getItem("currentDevId");
    if (!currentDevId) {
      return;
    }

    const response = await service.getDevById(currentDevId);
    if (!response.data?._id) {
      return;
    }

    this.$router.push({ path: `/dev/${currentDevId}` });
  },
  methods: {
    handleSubmit: async function () {
      const response = await service.authenticate(this.user.trim());
      const { _id } = response.data;
      localStorage.setItem("currentDevId", _id);
      this.$router.push({ path: `/dev/${_id}` });
    },
  },
};
</script>

<style scoped>
@import "./Login.css";
</style>
