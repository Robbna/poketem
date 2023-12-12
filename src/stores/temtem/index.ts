import type { ITemtem } from "@/common/data/temtem";
import { getTemtemList, getTemtemTechniqueList } from "@/server/service/temtem/TemtemService";
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

  const fetchTemtemData = async () => {
    const [temtemListRaw, temtemTechniqueListRaw] = await Promise.all([
      getTemtemList(),
      getTemtemTechniqueList()
    ]);

    // This section of code goes through the data obtained from the Temtems and their respective techniques.
    // It checks the techniques of each Temtem against the raw list of techniques, adding any extra information available to the 'moreInfo' property of each technique.
    // This enhances the details associated with each Temtem's techniques.
    temtemList.value = temtemListRaw.map((temtem) => {
      temtem.techniques = temtem.techniques.map((technique) => {
        const techniqueRaw = temtemTechniqueListRaw.find(
          (techniqueRaw) => techniqueRaw.name.trim().toLowerCase() === technique.name.trim().toLowerCase()
        );
        if (!techniqueRaw) {
          return technique;
        }
        technique.moreInfo = techniqueRaw;
        return technique;
      });
      return temtem;
    });
  };

  return { temtemList, fetchTemtemData, searchTemtemByName };
});
