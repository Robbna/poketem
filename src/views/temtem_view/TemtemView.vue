<script setup lang="ts">
import TemtemCard from "@/views/temtem_view/components/temtem_card/TemtemCard.vue";
import TemtemTypes from "@/views/temtem_view/components/temtem_types/TemtemTypes.vue";
import TemtemEvolutions from "@/views/temtem_view/components/temtem_evolutions/TemtemEvolutions.vue";

import AutoComplete from "primevue/autocomplete";
import type { AutoCompleteCompleteEvent } from "primevue/autocomplete";

import type { ITemtem } from "@/common/data/temtem";
import { capitalize, ref } from "vue";
import { useTemtem } from "@/stores/temtem";

const { temtemList, searchTemtemByName } = useTemtem();

const temtemNameForm = ref<string | null>(null);
const temtemFound = ref<ITemtem | null>(null);
const temtemFoundEvolutions = ref<ITemtem[]>([]);

const items = ref<string[]>([]);

const search = (event: AutoCompleteCompleteEvent) => {
  if (!temtemList) {
    return;
  }

  items.value = temtemList
    .filter((temtem) => temtem.name.toLowerCase().includes(event.query.toLowerCase()))
    .map((temtem) => temtem.name);
};

const handleSearch = async () => {
  const temtemName = temtemNameForm.value;

  if (!temtemName) {
    return;
  }

  temtemFound.value = searchTemtemByName(capitalize(temtemName.trim()));

  if (temtemFound.value && temtemFound.value.evolution.evolves) {
    temtemFoundEvolutions.value = temtemFound.value.evolution.evolutionTree.map(
      (evolution) => searchTemtemByName(evolution.name) as ITemtem
    );
  }
};
</script>
<template>
  <div v-if="!temtemList">
    <h1>No temtem found</h1>
  </div>
  <div v-if="temtemList" class="flex flex-col items-center gap-6 p-6">
    <section class="flex flex-col gap-6 items-center justify-center">
      <div>
        <h1>Search</h1>
        <form @submit.prevent="handleSearch" class="flex gap-3 card">
          <AutoComplete
            v-model="temtemNameForm"
            placeholder="Ganki, Tukai, ..."
            :suggestions="items"
            @complete="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div v-if="temtemFound" class="flex flex-col justify-center items-center gap-9">
        <TemtemCard :temtem="temtemFound" />
        <div v-if="temtemFound.evolution.evolves" class="flex flex-col">
          <h1>Evolutions</h1>
          <TemtemEvolutions :currentTemtem="temtemFound" :temtemEvolutions="temtemFoundEvolutions" />
        </div>
      </div>
    </section>
    <section class="flex flex-col">
      <h1>Type chart</h1>
      <TemtemTypes />
    </section>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

hr {
  width: 100%;
}

button {
  cursor: pointer;
  border: 1px solid var(--color-1);
}
</style>
