import type { ITemtem } from "@/common/data/temtem";
import { getTemtemList } from "@/server/service/temtem/TemtemService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTemtem = defineStore("temtem", () => {
  const temtemList = ref<ITemtem[] | null>(null);

  const searchTemtemByName = (name: string): ITemtem | null => {
    if (!temtemList.value) {
      return null;
    }
    return temtemList.value.find((temtem) => temtem.name === name) ?? null;
  };

  const fetchTemtemList = async () => {
    temtemList.value = await getTemtemList();
  };

  return { temtemList, fetchTemtemList, searchTemtemByName };
});
