import type { ITemtem } from "@/common/data/temtem";
import {
  getTemtemList,
  getTemtemTechniqueList,
  getTemtemTraitsList
} from "@/server/service/temtem/TemtemService";
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
    const [temtemListRaw, temtemTechniqueListRaw, temtemTraitsListRaw] = await Promise.all([
      getTemtemList(),
      getTemtemTechniqueList(),
      getTemtemTraitsList()
    ]);

    // This section of code goes through the data obtained from the Temtems and their respective techniques.
    // It checks the techniques of each Temtem against the raw list of techniques, adding any extra information available to the 'moreInfo' property of each technique.
    // This enhances the details associated with each Temtem's techniques.
    temtemList.value = temtemListRaw.map((temtem) => {
      // This section of code checks the techniques of each Temtem against the raw list of techniques.
      // If a match is found, the technique is updated with the extra information available in the raw list.
      // If no match is found, the technique is left as is.
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

      // This section of code checks the traits of each Temtem against the raw list of traits.
      // If a match is found, the trait is updated with the extra information available in the raw list.
      // If no match is found, the trait is left as is.
      temtem.traits = temtem.traits.map((trait) => {
        const traitRaw = temtemTraitsListRaw.find(
          (traitRaw) =>
            traitRaw.name.trim().toLowerCase() === (trait as unknown as string).trim().toLowerCase()
        );
        if (!traitRaw) {
          return trait;
        }
        trait = traitRaw;
        return trait;
      });

      // Sort the techniques by level of adquisition.
      temtem.techniques.sort((a, b) => a.levels - b.levels);

      return temtem;
    });
  };

  return { temtemList, fetchTemtemData, searchTemtemByName };
});
