<script setup lang="ts">
import Dialog from "primevue/dialog";
import { ref } from "vue";

import type { ITemtem } from "@/common/data/temtem";

interface IPropsTraitsDialog {
  temtem: ITemtem;
}

const props = defineProps<IPropsTraitsDialog>();

const dialogVisibility = ref(false);
</script>
<template>
  <button class="open-dialog-button w-full" @click="() => (dialogVisibility = !dialogVisibility)">
    Traits
  </button>

  <Dialog
    v-model:visible="dialogVisibility"
    modal
    :style="{ width: '90vw', maxWidth: '500px', maxHeight: '600px' }"
    :pt="{
      mask: {
        style: 'backdrop-filter: blur(3px)'
      }
    }"
  >
    <template #container="{ closeCallback }">
      <header class="flex items-center justify-between my-1 p-6">
        <h2 class="">Traits</h2>
        <button class="dialog-close-button" @click="closeCallback">❌</button>
      </header>
      <div class="trait-list-wrapper flex flex-col gap-6 p-6">
        <div class="trait-list" v-for="(trait, index) in props.temtem.traits" :key="index">
          <h1>{{ trait.name }}</h1>
          <p>{{ trait.description }}</p>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 9999;

  background-image: url("@/assets/temtem/button.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  filter: drop-shadow(1px 1px 1px black);
  color: white;
}

.trait-list-wrapper {
  position: relative;

  background-image: url("@/assets/temtem/card.png");
  filter: drop-shadow(1px 1px 1px black);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: auto;
  height: 100%;
  color: white;
}

.dialog-close-button {
  background: none;
  border: none;

  text-shadow: 1px 1px 2px black;
  cursor: pointer;
  font-size: 1.3rem;

  transition: scale 0.1s ease-in-out;
}

.dialog-close-button:hover {
  scale: 1.15;
}

.open-dialog-button {
  background-color: rgb(38, 38, 38);
  border: none;
  color: white;
  border-radius: 7px;
  padding: 6px;
  font-weight: 600;
  text-transform: uppercase;

  transition:
    background-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
}

.open-dialog-button:hover {
  background-color: var(--color-1);
  color: rgb(38, 38, 38);
  border: 1px solid rgb(38, 38, 38);
}
</style>
