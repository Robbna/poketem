<script setup lang="ts">
import TemtemCard from "@/views/temtem_view/components/temtem_card/TemtemCard.vue";

import type { ITemtem } from "@/common/data/temtem";

interface IPropsTemtemEvolutions {
  currentTemtem: ITemtem;
  temtemEvolutions: ITemtem[];
}

const props = defineProps<IPropsTemtemEvolutions>();
</script>
<template>
  <div class="evolutions-wrapper flex gap-6">
    <TemtemCard
      v-for="(temtemEvolution, index) in props.temtemEvolutions"
      :key="index"
      :temtem="temtemEvolution"
      showLevel
      :level="props.currentTemtem.evolution.evolutionTree[index].level"
    />
  </div>
</template>

<style scoped>
.evolutions-wrapper {
  max-width: 90vw;
  overflow-x: auto;
  padding: 2.6rem;
}
</style>
