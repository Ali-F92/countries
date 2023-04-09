export type TCard = {
  imageUrl: string;
  country: string;
  population: number;
  region: string;
  capital: string;
};

export type TAllCountries = {
  fifa: string;
  region: string;
  population: number;
  capital: string[];
  name: {
    common: string;
    nativeName: {
      eng: {
        common: string;
      };
    };
  };
  flags: {
    svg: string;
  };
  subregion: string;
  tld: string[];
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
  borders?: string[];
};
