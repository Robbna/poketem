<script setup lang="ts">
import TemtemCard from "@/views/temtem_view/components/temtem_card/TemtemCard.vue";
import TemtemTypes from "@/views/temtem_view/components/temtem_types/TemtemTypes.vue";

import { capitalize, onBeforeMount, ref } from "vue";
import type { ITemtem } from "@/common/data/temtem";

const temtemNameForm = ref<string | null>(null);
const temtemFound = ref<ITemtem | null>(null);
const temtemFoundEvolutions = ref<ITemtem[]>([]);

const temtemList = ref<ITemtem[]>([]);
onBeforeMount(async () => {
  const response = await fetch("https://temtem-api.mael.tech/api/temtems");
  temtemList.value = await response.json();
});

const searchTemtemByName = (temtemName: string): ITemtem | null => {
  return temtemList.value.find((temtem) => temtem.name === temtemName) ?? null;
};

const handleSearch = async () => {
  const temtemName = temtemNameForm.value;

  if (!temtemName) {
    return;
  }

  temtemFound.value = searchTemtemByName(capitalize(temtemName.trim()));

  console.log(temtemFound.value!.evolution);

  if (temtemFound.value && temtemFound.value.evolution.evolves) {
    temtemFoundEvolutions.value = temtemFound.value.evolution.evolutionTree.map(
      (evolution) => searchTemtemByName(evolution.name) as ITemtem
    );
  }
};
</script>
<template>
  <div class="flex items-center flex-col gap-6 justify-evenly">
    <div>
      <form
        ref="formElement"
        @submit.prevent="handleSearch"
        class="flex flex-col justify-center items-center p-6"
      >
        <div>
          <input type="text" v-model="temtemNameForm" placeholder="Ganki" />
          <button type="submit">Search</button>
        </div>
      </form>
      <div class="temtem-content flex flex-col gap-6" v-if="temtemFound">
        <div class="temtem-card-wrapper">
          <TemtemCard :temtem="temtemFound" />
        </div>
        <div v-if="temtemFound.evolution.evolves" class="flex flex-col gap-6">
          <div>
            <h1>Evolutions</h1>
            <hr />
          </div>
          <div class="temtem-evolutions-wrapper flex gap-6">
            <TemtemCard
              v-for="(temtemEvolution, index) in temtemFoundEvolutions"
              :key="index"
              :temtem="temtemEvolution"
              showLevel
              :level="temtemFound.evolution.evolutionTree[index].level"
            />
          </div>
        </div>
      </div>
    </div>
    <h1>Type Chart</h1>
    <hr />
    <TemtemTypes />
  </div>
</template>

<style scoped>
hr {
  width: 100%;
}

h1 {
  font-size: 3rem;
  text-align: center;
}

.temtem-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.3rem;
}

.temtem-card-wrapper {
  width: 300px;
}

.temtem-evolutions-wrapper {
  max-width: 930px;
  overflow: auto;
  padding: 30px;
}

hr {
  width: 100%;
}
input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 0.5rem;
}

button {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
}
</style>
