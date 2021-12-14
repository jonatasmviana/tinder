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
import moment from "moment";
import logo from "@/assets/logo.svg";
import service from "../../services/api.js";
import checkInvalidToken from "../../services/token.js";

export default {
  name: "Login",
  data: () => {
    return {
      logo: logo,
      user: "",
    };
  },
  mounted: async function () {
    const lsKey = localStorage.getItem("key");
    if (!lsKey) {
      return;
    }

    if (checkInvalidToken()) {
      return;
    }

    const currentDev = JSON.parse(lsKey);
    const response = await service.getDevById(currentDev.val);
    if (!response.data?._id) {
      return;
    }

    this.$router.push({ path: `/dev/${currentDev.val}` });
  },
  methods: {
    handleSubmit: async function () {
      const response = await service.authenticate(this.user.trim());
      const { _id } = response.data;

      const object = { val: _id, dt: moment(new Date()) };
      localStorage.setItem("key", JSON.stringify(object));

      this.$router.push({ path: `/dev/${_id}` });
    },
  },
};
</script>

<style scoped>
@import "./Login.css";
</style>
