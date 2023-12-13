import { ITemtem } from "./index.d";
export interface ITemtem {
  name: string;
  number: number;
  gameDescription: string;
  wikiUrl: string;
  wikiRenderAnimatedUrl: string;
  wikiRenderAnimatedLumaUrl: string;
  types: string[];
  techniques: ITemtemTechnique[];
  evolution: {
    evolves: boolean;
    evolutionTree: {
      name: string;
      level: number;
    }[];
  };
  details: {
    height: {
      cm: number;
      inches: number;
    };
    weight: {
      kg: number;
      lbs: number;
    };
  };
}

export interface ITemtemTechnique {
  name: string;
  source: string;
  levels: number;
  moreInfo: ITemtemTechniqueMoreInfo;
}
export interface ITemtemTechniqueMoreInfo {
  name: string;
  wikiUrl: string;
  type: string;
  class: string;
  classIcon: string;
  damage: string;
  staminaCost: string;
  hold: string;
  priority: string;
  priorityIcon: string;
  synergy: string;
  synergyEffects: {
    effect: string;
    type: string;
    damage: number;
  }[];
  targets: string;
  description: string;
  effectText: string;
  synergyText: string;
}
