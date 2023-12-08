export interface ITemtem {
  name: string;
  number: number;
  gameDescription: string;
  wikiUrl: string;
  wikiRenderAnimatedUrl: string;
  wikiRenderAnimatedLumaUrl: string;
  types: string[];
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
