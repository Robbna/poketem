<script setup lang="ts">
import typesImage from "@/assets/temtem/types.png";
import typeChartImage from "@/assets/temtem/type_chart.png";
</script>
<template>
  <div class="flex flex-col gap-3 items-start">
    <img draggable="false" :src="typeChartImage" alt="type chart" />
    <img draggable="false" :src="typesImage" alt="types" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  object-fit: contain;
}
</style>
