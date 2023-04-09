import { Suspense } from "react";
import { Cards } from "./containers/cards";
import { SearchBar } from "./containers/search-bar";
import { Select } from "./containers/select";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_bar">
        <SearchBar />
        <Select />
      </div>

      <Suspense fallback={"loading ..."}>
        <Cards />
      </Suspense>
    </div>
  );
};
