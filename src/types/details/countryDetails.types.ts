import { TAllCountries } from "types/home/card.types";

export type TCountryDetails = TAllCountries & {
  subregion: string;
  tld: string[];
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
};
