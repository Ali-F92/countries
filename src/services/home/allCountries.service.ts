import { baseUrl } from "constants/url";
import { TAllCountries } from "types/home/card.types";

export const getAllCountries = async (): Promise<TAllCountries[]> => {
  const res = await fetch(
    `${baseUrl}/all?fields=name,population,region,capital,flags,subregion,currencies,tld,fifa,languages,borders`
  );
  return res.json();
};
