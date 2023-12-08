<script setup lang="ts">
import { ref } from "vue";

import type { ITemtem } from "@/common/data/temtem";

interface IPropsTemtemCard {
  temtem: ITemtem;
  showLevel?: boolean;
  level?: number;
}

const props = defineProps<IPropsTemtemCard>();

const showLumaImage = ref(false);

const handleLumaButton = () => {
  showLumaImage.value = !showLumaImage.value;
};
</script>
<template>
  <div class="temtem-card">
    <div>
      <h1 class="temtem-name">{{ props.temtem.name }}</h1>
      <h3 v-if="props.showLevel"> → + {{ props.level }} lvl →</h3>
      <h4 class="temtem-name"># {{ props.temtem.number }}</h4>
    </div>
    <div>
      <div>
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
        <div class="flex flex-col w-full gap-2">
          <p
            v-for="(type, index) in props.temtem.types"
            :key="index"
            :class="`temtem-type ${type.toLowerCase()}`"
          >
            {{ type }}
          </p>
        </div>
        <hr class="m-3" />
      </div>
      <div class="flex items-center justify-around">
        <button @click="handleLumaButton" class="luma-button">Luma version</button>
        <small class="temtem-wiki-url">
          <a :href="props.temtem.wikiUrl">More info 🔍</a>
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
  text-align: center;
  font-weight: bolder;
}

h4 {
  font-size: 0.9rem;
  text-align: center;
}
.luma-button {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  color: white;
  margin: 0.3rem;
  padding: 0.2rem 0.4rem;
  font-size: 0.9rem;
  border-radius: 7px;
  font-weight: 600;
  text-transform: uppercase;

  box-sizing: border-box;

  text-shadow: 1px 1px 3px black;
  letter-spacing: 0.1rem;
}

.luma-button:active {
  color: lightblue;
}

.temtem-card {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* max-width: 300px; */
  width: 100%;
  border-radius: 14px;
  padding: 1rem;
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
  font-size: 0.8rem;
  margin: 0.3rem;
}
</style>
