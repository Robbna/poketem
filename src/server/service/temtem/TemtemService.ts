import type { ITemtem } from "@/common/data/temtem";

export const getTemtemList = async (): Promise<ITemtem[]> => {
  const response = await fetch("https://temtem-api.mael.tech/api/temtems");
  return (await response.json()) as ITemtem[];
};
