import { DetailRow } from "components/detail-row";
import "pages/home/components/card/card.css";
import { TCard } from "types/home/card.types";

export const Card = ({
  imageUrl,
  country,
  population,
  region,
  capital,
}: TCard) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <section>
        <h2>{country}</h2>
        <DetailRow title="Population" text={population.toLocaleString()} />
        <DetailRow title="Region" text={region} />
        <DetailRow title="Capital" text={capital} />
      </section>
    </div>
  );
};
