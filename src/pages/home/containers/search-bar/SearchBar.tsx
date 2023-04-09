import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "pages/home/containers/search-bar/search-bar.css";
import { useRecoilState } from "recoil";
import { countryNameState } from "store/home/countryName";
import { ChangeEvent } from "react";

export const SearchBar = () => {
  const [countryName, setCountryName] = useRecoilState(countryNameState);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  return (
    <div className="formSearch">
      <FontAwesomeIcon className="search" icon={faSearch} />
      <input
        type="search"
        placeholder="Search for a country..."
        value={countryName}
        onChange={onChangeHandler}
      />
    </div>
  );
};
