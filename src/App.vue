<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useTemtem } from "@/stores/temtem";

const { fetchTemtemList } = useTemtem();

onBeforeMount(async () => {
  await fetchTemtemList();
});
</script>
<template>
  <nav class="flex justify-center">
    <router-link class="router-link pokemon" to="/pokemon">POKEMON</router-link>
    <router-link class="router-link temtem" to="/temtem">TEMTEM</router-link>
  </nav>
  <RouterView />
  <div class="github-buble flex flex-col justify-center items-center">
    <a href="https://github.com/Robbna/poketem">
      <i class="fab fa-github"> </i>
    </a>
  </div>
</template>

<style scoped>
.github-buble {
  position: fixed;
  bottom: 0.6rem;
  left: 0.6rem;

  font-size: 40px;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
}

nav {
  position: sticky;
  z-index: 999999;
}

.router-link {
  width: 100%;
  text-align: center;
  padding: 1.3rem;

  font-weight: 900;
  letter-spacing: 0.3rem;
  font-size: 1.8rem;

  filter: grayscale();

  transition:
    background-size 0.2s ease-in-out,
    filter 0.1s ease-in-out;
  &.router-link-active {
    filter: none;
  }

  &.pokemon {
    background: url("https://images7.alphacoders.com/592/592678.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    color: rgb(255, 204, 1);
    text-shadow:
      3px 3px 0 rgb(53, 96, 172),
      -3px 3px 0 rgb(53, 96, 172),
      -3px -3px 0 rgb(53, 96, 172),
      3px -3px 0 rgb(53, 96, 172);
  }

  &.temtem {
    background: url("https://i.imgur.com/UMe7Mmy.jpeg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    color: rgb(255, 192, 95);
    text-shadow:
      2px 2px 0 rgb(74, 45, 77),
      -2px 2px 0 rgb(74, 45, 77),
      -2px -2px 0 rgb(74, 45, 77),
      2px -2px 0 rgb(74, 45, 77);
  }

  &.temtem,
  &.pokemon {
    &:hover {
      background-size: 120%;
    }
  }
}
</style>
