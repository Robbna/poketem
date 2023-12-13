<script setup lang="ts">
import type { ITemtemTechnique } from "@/common/data/temtem";

interface IPropsTechniqueItem {
  technique: ITemtemTechnique;
}

const props = defineProps<IPropsTechniqueItem>();
</script>
<template>
  <div class="p-3">
    <div class="technique-item-wrapper">
      <span class="level">
        {{ props.technique.source === "Levelling" ? `lvl ${props.technique.levels}` : "Breeding" }}
      </span>
      <div class="grid grid-flow-col justify-between md:px-16 items-center text-center px-6 py-3">
        <span :class="`type ${props.technique.moreInfo.type.toLowerCase()}`">
          {{ props.technique.moreInfo.type }}
        </span>
        <h1 class="name">{{ props.technique.name }}</h1>
        <div class="flex gap-1">
          <div class="stamina flex justify-center items-center">
            <span class="stanima-text">
              {{ props.technique.moreInfo.staminaCost }}
            </span>
          </div>
          <span class="text-xs"> STA </span>
        </div>
      </div>
    </div>
    <div>
      <span class="description"> {{ props.technique.moreInfo.description }} </span>
    </div>
  </div>
</template>

<style scoped>
.technique-item-wrapper {
  background-image: url("@/assets/temtem/plane.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  position: relative;

  font-size: 1.6rem;
}

.level {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  margin: -3px;
}

.name {
  font-size: 1rem;
  text-wrap: wrap;
}

.stamina {
  border: 2px solid white;
  border-radius: 50%;
  width: 2.1rem;
  height: 2.1rem;
  background-color: rgb(74, 211, 215);
}

.stanima-text {
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px black;
}

.description {
  /* font-size: 0.9rem; */
  font-size: 1.1rem;
}

.type {
  color: var(--color-3);
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image */
  /* https://lenguajecss.com/css/mascaras-y-recortes/mask-image/ */
  font-size: 0.85rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
  text-transform: uppercase;
  &.wind {
    color: rgb(1, 250, 180);
  }
  &.neutral {
    color: rgb(222, 232, 234);
  }

  &.water {
    color: rgb(67, 204, 255);
  }

  &.fire {
    color: rgb(233, 92, 77);
  }

  &.nature {
    color: rgb(174, 223, 120);
  }

  &.electric {
    color: rgb(252, 224, 116);
  }

  &.earth {
    color: rgb(187, 122, 92);
  }

  &.mental {
    color: rgb(195, 105, 163);
  }

  &.digital {
    color: rgb(165, 193, 194);
  }

  &.melee {
    color: rgb(250, 147, 96);
  }

  &.crystal {
    color: rgb(235, 73, 104);
  }

  &.toxic {
    color: rgb(92, 85, 92);
  }
}
</style>
