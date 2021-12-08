<template>
  <div class="main-container">
    <!-- <Link to="/login"> -->
    <img
      :src="logo"
      alt="Team Der"
      class="img-logo"
    />
    <!-- </Link> -->

    <ul>
      <li>
        <img
          src="https://avatars0.githubusercontent.com/u/53798985?v=4"
          alt="https://avatars0.githubusercontent.com/u/53798985?v=4"
        />

        <footer>
          <strong>Jonatas Viana</strong>
          <p>teste api</p>
        </footer>

        <div class="buttons">
          <button
            type="button"
            onClick="">
            <img
              :src="dislike"
              alt="dislike"
            />
          </button>

          <button
            type="button"
            onClick="">
            <img
              :src="like"
              alt="like"
            />
          </button>
        </div>
      </li>
      <li>
        <img
          src="https://avatars3.githubusercontent.com/u/16545335?v=4"
          alt="https://avatars3.githubusercontent.com/u/16545335?v=4"
        />

        <footer>
          <strong>Guilherme Pellizzetti</strong>
          <p>Prepared to be a lifelong learner! I'm self-taught and a quick learner ★ Passionate about analyzing and testing data as a lever for business growth ★</p>
        </footer>

        <div class="buttons">
          <button
            type="button"
            onClick="">
            <img
              :src="dislike"
              alt="dislike"
            />
          </button>

          <button
            type="button"
            onClick="">
            <img
              :src="like"
              alt="like"
            />
          </button>
        </div>
      </li>
    </ul>
    <!-- <div class="empty">Acabou</div> -->
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";
import like from "@/assets/like.svg";
import dislike from "@/assets/dislike.svg";

export default {
  name: "Home",
  data: () => {
    return {
      logo: logo,
      like: like,
      dislike: dislike,
    };
  },
};
</script>

<style scoped>
@import "./Home.css";
</style>
