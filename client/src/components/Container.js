import "./Container.css";
import "./Countries.css";
import countries from "../geoData/countries.json";
// import states from "../geoData/states.json";
// import cities from "../geoData/cities.json";
import { useState } from "react";
import { HiInformationCircle, HiArrowCircleRight } from "react-icons/hi";

function Container() {
  const [searchCountry, setSearchCountry] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [showState, setShowState] = useState("");

  function moreInfo() {
    console.log("more info");
  }

  return (
    <div className="container">
      <div className="countries">
        <div>Countries</div>
        <input
          type="text"
          placeholder="Search Countries..."
          onChange={(event) => setSearchCountry(event.target.value)}
          aria-label="country-search"
          className="search"
        />
        <div className="countryList">
          {countries
            .filter((countries) => {
              if (searchCountry === "") {
                return countries;
              } else if (
                countries.name
                  .toLowerCase()
                  .includes(searchCountry.toLowerCase())
              ) {
                return countries;
              }
            })
            .map((countries) => {
              return (
                <ul key={countries.id}>
                  <li>
                    {countries.name}
                    <div className="icons">
                      <HiInformationCircle
                        onClick={() => moreInfo()}
                        className="more-info"
                      />
                      <HiArrowCircleRight
                        onClick={() => setShowState()}
                        className="show-states"
                      />
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className="states">
        <div>States</div>
        <input
          type="text"
          placeholder="Search States..."
          onChange={(event) => setSearchState(event.target.value)}
          aria-label="state-search"
          className="search"
        />
        <div className="stateList">
          {countries
            .filter((countries) => {
              if (searchState === "") {
                return countries;
              } else if (
                countries.name.toLowerCase().includes(searchState.toLowerCase())
              ) {
                return countries;
              }
            })
            .map((countries) => {
              return (
                <ul key={countries.id}>
                  <li>
                    {countries.name}
                    <div className="icons">
                      <HiInformationCircle
                        onClick={() => moreInfo()}
                        className="more-info"
                      />
                      <HiArrowCircleRight
                        onClick={() => setShowState()}
                        className="show-state"
                      />
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
      <div className="cities">
        <div>Cities</div>
        <input
          type="text"
          placeholder="Search Cities..."
          onChange={(event) => setSearchCity(event.target.value)}
          aria-label="city-search"
          className="search"
        />
        <div className="cityList">
          {countries
            .filter((countries) => {
              if (searchCity === "") {
                return countries;
              } else if (
                countries.name.toLowerCase().includes(searchCity.toLowerCase())
              ) {
                return countries;
              }
            })
            .map((countries) => {
              return (
                <ul key={countries.id}>
                  <li>
                    {countries.name}
                    <div className="icons">
                      <HiInformationCircle
                        onClick={() => moreInfo()}
                        className="more-info"
                      />
                      <HiArrowCircleRight
                        onClick={() => setShowState()}
                        className="show-states"
                      />
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Container;
