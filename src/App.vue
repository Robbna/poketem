<script setup lang="ts">
import githubFork from "@/assets/github_fork.png";
</script>
<template>
  <nav>
    <router-link class="router-link" to="/pokemon">Pokemon</router-link>
    <router-link class="router-link" to="/temtem">Temtem</router-link>
  </nav>
  <RouterView />
  <a href="https://github.com/Robbna/poketem">
    <img class="github-fork" :src="githubFork" />
  </a>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f1f1f1;
}

.github-fork {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  z-index: 9999;
  width: 130px;
}

.router-link {
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #1f1f1f;
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}
</style>
