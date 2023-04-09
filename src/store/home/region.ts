import { atom } from "recoil";
import { TRegionState } from "types/home/region.types";

export const regionState = atom<TRegionState | null>({
  key: "regionState",
  default: null,
});
