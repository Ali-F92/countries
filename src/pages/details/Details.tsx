import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import { DetailRow } from "components/detail-row";
import { LinkButton } from "./components/link-button";
import "./details.css";
import { useQueryClient } from "@tanstack/react-query";
import { TAllCountries } from "types/home/card.types";
import { queryKeys } from "constants/queryKeys";

export const Details = () => {
  const qeuryClient = useQueryClient();
  const { state } = useLocation();

  const country = qeuryClient
    .getQueryData<TAllCountries[]>([queryKeys.allCountries], { exact: false })
    ?.find((item) => item.fifa === state || item.name.common === state);

  return (
    <div className="details">
      <LinkButton to="/" className="linkButton--back">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="back">Back</span>
      </LinkButton>
      <div className="details_container">
        <div className="flag">
          <img src={country?.flags.svg} alt="" />
        </div>

        <div className="information">
          <h2>{country?.name.common}</h2>
          <div className="information_descriptions">
            <div>
              <DetailRow
                title="Native Name"
                text={country?.name?.nativeName?.eng?.common ?? ""}
              />
              <DetailRow
                title="Population"
                text={country?.population.toLocaleString() ?? ""}
              />
              <DetailRow title="Region" text={country?.region ?? ""} />
              <DetailRow title="Sub Region" text={country?.subregion ?? ""} />
              <DetailRow
                title="Capital"
                text={country?.capital.join(", ") ?? ""}
              />
            </div>
            <div>
              <DetailRow
                title="Top Level Domain"
                text={country?.tld.join(", ") ?? ""}
              />
              <DetailRow
                title="Currencies"
                text={
                  Object.values(country?.currencies ?? {})
                    .map((item) => item.name)
                    .join(", ") ?? ""
                }
              />
              <DetailRow
                title="Languages"
                text={Object.values(country?.languages ?? {}).join(", ") ?? ""}
              />
            </div>
          </div>

          {country?.borders && country.borders.length > 0 && (
            <>
              <h4>Border Countries:</h4>
              <div className="borderWrapper">
                {country.borders.map((item) => (
                  <LinkButton
                    key={item}
                    to={`/details/${item}`}
                    state={item}
                    className="linkButton--country"
                  >
                    {item}
                  </LinkButton>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
