// index for all GraphQL type definitions

import { userTypeDefs } from "./userTypeDefs.mjs";
import { beerMasterTypeDefs } from "./beerMasterTypeDefs.mjs";
import { ingredientsListTypeDefs } from "./ingredientsListTypeDefs.mjs";
import { hopsTypeDefs } from "./hopsTypeDefs.mjs";
import { maltTypeDefs } from "./maltTypeDefs.mjs";
import { yeastTypeDefs } from "./yeastTypeDefs.mjs";
import { additivesTypeDefs } from "./additivesTypeDefs.mjs";
import { waterTypeDefs } from "./waterTypeDefs.mjs";
import { processTypeDefs } from "./processTypeDefs.mjs";

export const typeDefs = [
  userTypeDefs,
  beerMasterTypeDefs,
  ingredientsListTypeDefs,
  hopsTypeDefs,
  maltTypeDefs,
  yeastTypeDefs,
  additivesTypeDefs,
  waterTypeDefs,
  processTypeDefs,
];
