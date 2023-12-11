<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useTemtem } from "@/stores/temtem";

const { fetchTemtemList } = useTemtem();

const loadedData = ref(false);

onBeforeMount(async () => {
  await fetchTemtemList();

  loadedData.value = true;
});
</script>
<template>
  <div v-if="!loadedData">
    <BaseSpinner />
  </div>
  <div v-if="loadedData">
    <nav class="flex justify-center">
      <router-link class="router-link pokemon" to="/pokemon">POKEMON</router-link>
      <router-link class="router-link temtem" to="/temtem">TEMTEM</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
.router-link {
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: 1rem;

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
