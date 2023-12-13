import type { ITemtem, ITemtemTechniqueMoreInfo } from "@/common/data/temtem";

const BASE_URL = "https://temtem-api.mael.tech/api";

export const getTemtemList = async (): Promise<ITemtem[]> => {
  const response = await fetch(`${BASE_URL}/temtems`);
  return (await response.json()) as ITemtem[];
};

export const getTemtemTechniqueList = async (): Promise<ITemtemTechniqueMoreInfo[]> => {
  const response = await fetch(`${BASE_URL}/techniques`);
  return (await response.json()) as ITemtemTechniqueMoreInfo[];
}
