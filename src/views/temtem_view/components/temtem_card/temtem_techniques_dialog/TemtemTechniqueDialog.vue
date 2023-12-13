<script setup lang="ts">
import Dialog from "primevue/dialog";
import TechniqueItem from "./technique_item/TechniqueItem.vue";

import type { ITemtem } from "@/common/data/temtem";

import { ref } from "vue";

const dialogVisibility = ref(false);

interface IPropsTemtemTechniqueList {
  temtem: ITemtem;
}

const props = defineProps<IPropsTemtemTechniqueList>();
</script>
<template>
  <button class="open-dialog-button" @click="() => (dialogVisibility = !dialogVisibility)">Techniques</button>

  <Dialog
    v-model:visible="dialogVisibility"
    modal
    :style="{ width: '90vw', maxWidth: '700px', maxHeight: '600px' }"
    :pt="{
      mask: {
        style: 'backdrop-filter: blur(3px)'
      }
    }"
  >
    <template #container="{ closeCallback }">
      <header class="flex items-center justify-between my-1 p-3">
        <h2 class="">Techniques</h2>
        <button class="dialog-close-button" @click="closeCallback">❌</button>
      </header>
      <div class="technique-list-wrapper">
        <div class="technique-list gap-4 flex flex-col p-3">
          <TechniqueItem
            v-for="technique in props.temtem.techniques"
            :key="technique.name"
            :technique="technique"
          />
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

.technique-list-wrapper {
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
