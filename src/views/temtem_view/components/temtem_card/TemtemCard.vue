<script setup lang="ts">
import TemtemTechniqueDialog from "./temtem_techniques_dialog/TemtemTechniqueDialog.vue";

import { ref } from "vue";

import type { ITemtem } from "@/common/data/temtem";

interface IPropsTemtemCard {
  temtem: ITemtem;
  showLevel?: boolean;
  level?: number;
}

const props = defineProps<IPropsTemtemCard>();

const showLumaImage = ref(false);
</script>
<template>
  <div class="temtem-card">
    <header>
      <h1 class="temtem-name">{{ props.temtem.name }}</h1>
      <h3 v-if="props.showLevel">→ + {{ props.level }} lvl →</h3>
      <h4 class="temtem-level"># {{ props.temtem.number }}</h4>
    </header>
    <div class="flex flex-col gap-3">
      <div class="temtem-image-wrapper">
        <img
          class="temtem-image normal"
          :style="{ opacity: showLumaImage ? 0 : 1 }"
          :src="props.temtem.wikiRenderAnimatedUrl"
          :alt="`${props.temtem.name} image`"
        />
        <img
          class="temtem-image luma"
          :style="{ opacity: showLumaImage ? 1 : 0 }"
          :src="props.temtem.wikiRenderAnimatedLumaUrl"
          :alt="`${props.temtem.name} image`"
        />
      </div>
      <div class="flex flex-col gap-2">
        <p
          v-for="(type, index) in props.temtem.types"
          :key="index"
          :class="`temtem-type ${type.toLowerCase()}`"
        >
          {{ type }}
        </p>
      </div>
      <footer class="flex items-center gap-1 justify-between">
        <label class="luma-button-wrapper flex gap-2 items-center justify-center">
          <span>✨Luma✨</span>
          <input class="luma-button" type="checkbox" v-model="showLumaImage" />
        </label>
        <div>
          <TemtemTechniqueDialog :temtem="props.temtem" />
        </div>
        <small class="temtem-wiki-url">
          <a :href="props.temtem.wikiUrl">Wiki</a>
        </small>
      </footer>
    </div>
  </div>
</template>

<style scoped>
footer {
  min-height: 50px;
}

.temtem-name,
.temtem-level {
  text-align: center;
}

.temtem-name {
  font-size: 2rem;
}

.temtem-level {
  font-size: 0.9rem;
}
.luma-button-wrapper {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  color: white;
  padding: 0.2rem 0.4rem;
  font-size: 0.9rem;
  border-radius: 7px;
  font-weight: 600;
  text-transform: uppercase;

  text-shadow: 1px 1px 3px black;
  letter-spacing: 0.1rem;
}

.temtem-card {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  max-width: 300px;
  border-radius: 14px;
  padding: 0.6rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.temtem-image-wrapper {
  position: relative;
}

.temtem-image {
  width: 100%;
  object-fit: cover;

  padding: 1rem;

  transition: opacity 0.2s ease-in-out;

  &.luma {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.temtem-type {
  text-align: center;
  border-radius: 7px;
  font-size: 1.4rem;

  &.wind {
    background-color: rgb(1, 250, 180);
  }
  &.neutral {
    background-color: rgb(222, 232, 234);
  }

  &.water {
    background-color: rgb(67, 204, 255);
  }

  &.fire {
    background-color: rgb(233, 92, 77);
  }

  &.nature {
    background-color: rgb(174, 223, 120);
  }

  &.electric {
    background-color: rgb(252, 224, 116);
  }

  &.earth {
    background-color: rgb(187, 122, 92);
  }

  &.mental {
    background-color: rgb(195, 105, 163);
  }

  &.digital {
    background-color: rgb(165, 193, 194);
  }

  &.melee {
    background-color: rgb(250, 147, 96);
  }

  &.crystal {
    background-color: rgb(235, 73, 104);
  }

  &.toxic {
    background-color: rgb(92, 85, 92);
  }
}

.temtem-wiki-url {
  font-size: 0.9rem;
  text-align: center;
}
</style>
