import { type SchemaTypeDefinition } from "sanity";
import { newsStoryType } from "./newsStoryType";
import { heroCarouselType } from "./heroCarouselType";
import { AMDsType } from "./AMDsTypes";
import { tickerType } from "./tickerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsStoryType, heroCarouselType,AMDsType, tickerType],
};
