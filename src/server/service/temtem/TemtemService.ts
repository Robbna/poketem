import type { ITemtem, ITemtemTechnique } from "@/common/data/temtem";

const BASE_URL = "https://temtem-api.mael.tech/api";

export const getTemtemList = async (): Promise<ITemtem[]> => {
  const response = await fetch(`${BASE_URL}/temtems`);
  return (await response.json()) as ITemtem[];
};

export const getTemtemTechniqueList = async (): Promise<ITemtemTechnique[]> => {
  const response = await fetch(`${BASE_URL}/techniques`);
  return (await response.json()) as ITemtemTechnique[];
}
