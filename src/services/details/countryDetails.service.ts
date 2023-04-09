import { QueryFunctionContext } from "@tanstack/react-query";
import { baseUrl } from "constants/url";
import { TCountryDetails } from "types/details/countryDetails.types";

export const getCountryDetails = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<TCountryDetails[]> => {
  const res = await fetch(
    `${baseUrl}/name/${queryKey[1]}?fullText=true&fields=name,population,region,capital,flags,subregion,currencies`
  );
  return res.json();
};
