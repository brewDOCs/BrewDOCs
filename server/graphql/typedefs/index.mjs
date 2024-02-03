// index for all GraphQL type definitions

import { userTypeDefs } from "./userTypeDefs.mjs";
import { beerMasterTypeDefs } from "./beerMasterTypeDefs.mjs";
import { ingredientsTypeDefs } from "./ingredientsTypeDefs.mjs";
import { hopsTypeDefs } from "./hopsTypeDefs.mjs";
import { maltTypeDefs } from "./maltTypeDefs.mjs";
import { yeastTypeDefs } from "./yeastTypeDefs.mjs";
import { additivesTypeDefs } from "./additivesTypeDefs.mjs";
import { waterTypeDefs } from "./waterTypeDefs.mjs";
import { processTypeDefs } from "./processTypeDefs.mjs";

export const typeDefs = [
  userTypeDefs,
  beerMasterTypeDefs,
  ingredientsTypeDefs,
  hopsTypeDefs,
  maltTypeDefs,
  yeastTypeDefs,
  additivesTypeDefs,
  waterTypeDefs,
  processTypeDefs,
];
