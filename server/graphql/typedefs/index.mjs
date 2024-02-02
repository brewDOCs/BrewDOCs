// index for all GraphQL type definitions

import { userTypeDefs } from "./userTypeDefs.mjs";
import { ingredientsTypeDefs } from "./ingredientsTypeDefs.mjs";
import { processTypeDefs } from "./processTypeDefs.mjs";

export const typeDefs = [ userTypeDefs, ingredientsTypeDefs, processTypeDefs ];
