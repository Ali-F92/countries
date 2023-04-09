import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "constants/queryKeys";
import { Card } from "pages/home/components/card";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getAllCountries } from "services/home/allCountries.service";
import { countryNameState } from "store/home/countryName";
import { regionState } from "store/home/region";
import { TAllCountries } from "types/home/card.types";

export const Cards = () => {
  const region = useRecoilValue(regionState);
  const countryName = useRecoilValue(countryNameState);
  const { data, error } = useQuery([queryKeys.allCountries], getAllCountries, {
    suspense: true,
    select: (items) => {
      let filteredByRegion: TAllCountries[] = [...items];
      if (region?.name && region.name !== "all") {
        filteredByRegion = filteredByRegion.filter(
          (filterItem) => filterItem.region === region.name
        );
      }
      if (countryName) {
        filteredByRegion = filteredByRegion.filter((filterItem) =>
          filterItem.name.common.includes(countryName)
        );
      }
      return filteredByRegion;
    },
  });

  if (data && !error) {
    return (
      <div className="home_cards">
        {data.map((item) => (
          <Link
            key={item.name.common}
            to={`details/${item.fifa ? item.fifa : item.name.common}`}
            state={item.fifa ? item.fifa : item.name.common}
            style={{ textDecoration: "none" }}
          >
            <Card
              imageUrl={item.flags.svg}
              capital={item.capital.join(", ")}
              population={item.population}
              country={item.name.common}
              region={item.region}
            />
          </Link>
        ))}
      </div>
    );
  }
  return null;
};
