import "./Countries.css";
import countriesJSON from "../geoData/countries.json";
import { useState } from "react";
import { HiInformationCircle, HiArrowCircleRight } from "react-icons/hi";

function Countries() {
  const [searchTerm, setSearchTerm] = useState("");

  function moreInfo() {
    console.log("more info");
  }

  function showStates() {
    console.log("show states");
  }

  return (
    <div className="countries">
      <div>Countries</div>
      <input
        type="text"
        placeholder="Search Countries..."
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="country-search"
      />
      <div className="countryList">
        {countriesJSON
          .filter((countries) => {
            if (searchTerm === "") {
              return countries;
            } else if (
              countries.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return countries;
            }
          })
          .map((countries) => {
            return (
              <ul key={countries.id}>
                <li>
                  {countries.name}
                  <HiInformationCircle
                    onClick={() => moreInfo()}
                    className="more-info"
                  />
                  <HiArrowCircleRight
                    onClick={() => showStates()}
                    className="show-states"
                  />
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default Countries;
