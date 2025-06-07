// lib/jsonCache.ts
import deputies from "@/db/deputies.json";
import presence from "@/db/presence.json";
import votes from "@/db/votes.json";
import laws from "@/db/laws.json";

export const cachedData = {
  deputies,
  presence,
  votes,
  laws,
};
