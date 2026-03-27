/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as alerts from "../alerts.js";
import type * as fares from "../fares.js";
import type * as lines from "../lines.js";
import type * as schedules from "../schedules.js";
import type * as seed_clear from "../seed/clear.js";
import type * as seed_data_central_line from "../seed/data/central_line.js";
import type * as seed_data_fares from "../seed/data/fares.js";
import type * as seed_run from "../seed/run.js";
import type * as stations from "../stations.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  alerts: typeof alerts;
  fares: typeof fares;
  lines: typeof lines;
  schedules: typeof schedules;
  "seed/clear": typeof seed_clear;
  "seed/data/central_line": typeof seed_data_central_line;
  "seed/data/fares": typeof seed_data_fares;
  "seed/run": typeof seed_run;
  stations: typeof stations;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
