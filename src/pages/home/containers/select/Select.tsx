import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import "pages/home/containers/select/select.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { TRegionState } from "types/home/region.types";
import { useRecoilState } from "recoil";
import { regionState } from "store/home/region";

const regions: TRegionState[] = [
  {
    name: "Africa",
  },
  {
    name: "Americas",
  },
  { name: "Asia" },
  {
    name: "Europe",
  },
  { name: "Oceania" },
  {
    name: "all",
  },
];

export const Select = () => {
  const [region, setRegion] = useRecoilState(regionState);

  return (
    <Listbox value={region} onChange={setRegion} as={Fragment}>
      <div className="selectWrapper">
        <Listbox.Button as={Fragment}>
          {({ open }) => (
            <div className="selectButton">
              {region ? region.name : "Filter by Region"}
              <FontAwesomeIcon
                icon={open ? faChevronUp : faChevronDown}
                className="icon"
              />
            </div>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="options">
            {regions.map((region) => (
              <Listbox.Option
                key={region.name}
                value={region}
                className="option"
              >
                {region.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
