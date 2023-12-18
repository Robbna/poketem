<script setup lang="ts">
import TemtemTechniqueDialog from "./temtem_techniques_dialog/TemtemTechniqueDialog.vue";
import TemtemTraitsDialog from "./temtem-traits-dialog/TemtemTraitsDialog.vue";

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
  <div class="temtem-card text-center flex flex-col justify-between">
    <div class="more-data-wrapper flex flex-col items-center gap-3 z-10 p-2">
      <label class="luma-button-wrapper">
        <input class="luma-button appearance-none" type="checkbox" v-model="showLumaImage" />
      </label>
      <div class="flex flex-col items-center">
        <img src="@/assets/temtem/temcard.webp" class="w-8" />
        <label class="label-catchRate">{{ props.temtem.catchRate }}%</label>
      </div>
    </div>
    <header>
      <h1 class="temtem-name">{{ props.temtem.name }}</h1>
      <h3 v-if="props.showLevel">→ + {{ props.level }} lvl →</h3>
      <h4 class="temtem-level"># {{ props.temtem.number }}</h4>
    </header>
    <section class="images-wrapper">
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
    </section>
    <div>
      <section class="flex flex-col gap-2">
        <p
          v-for="(type, index) in props.temtem.types"
          :key="index"
          :class="`temtem-type ${type.toLowerCase()}`"
        >
          {{ type }}
        </p>
      </section>
      <footer class="flex flex-col pt-3 justify-between">
        <div class="h-9 flex gap-1">
          <TemtemTechniqueDialog :temtem="props.temtem" />
          <TemtemTraitsDialog :temtem="props.temtem" />
        </div>
        <small class="temtem-wiki-url pt-3">
          <a :href="props.temtem.wikiUrl">More info <i class="fa-solid fa-link"></i></a>
        </small>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.temtem-name {
  font-size: 2rem;
}

.temtem-level {
  position: absolute;
  top: 0;
  left: 0;
}

.temtem-level,
.luma-button {
  margin: 9px;
}

.more-data-wrapper {
  position: absolute;
  top: 0;
  right: 0;
}

.label-catchRate {
  font-weight: 600;
}

.luma-button {
  width: 30px;
  height: 30px;
  background-image: url("@/assets/temtem/luma_icon.webp");
  background-size: contain;

  transition: all 0.1s ease-in-out;
}
.luma-button:checked,
.luma-button:hover {
  scale: 1.09;
  filter: drop-shadow(0 0 3px rgb(255, 172, 38));
}

.temtem-card {
  position: relative;

  background-color: white;

  min-width: 300px;
  max-width: 300px;
  border-radius: 14px;
  padding: 1.6rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.images-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.temtem-image {
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: contain;

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
  font-size: 0.8rem;
  text-align: center;
  
  a {
    text-decoration: none;
    color: var(--color-2);
  }
}
</style>
