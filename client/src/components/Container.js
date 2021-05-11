import "./Container.css";
import "./Countries.css";
import { useState, useEffect } from "react";
import { HiInformationCircle, HiArrowCircleRight } from "react-icons/hi";
import axios from "axios";

function Container() {
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [state, setState] = useState([]);

  function moreInfo() {
    console.log("more info");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/all")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getCountryStates(value) {
    const countryData = country.find((element) => element.name === value);
    const stateData = countryData.states;
    setState(stateData);
  }

  function ShowState({ stateData }) {
    return (
      <div className="countryList">
        {stateData
          .filter((states) => {
            if (searchState === "") {
              return states;
            } else if (
              states.name.toLowerCase().includes(searchState.toLowerCase())
            ) {
              return states;
            }
          })
          .map((states) => {
            return (
              <ul key={states.id}>
                <li>
                  {states.name}
                  <div className="icons">
                    <HiInformationCircle
                      onClick={() => moreInfo()}
                      className="more-info"
                    />
                    <HiArrowCircleRight className="show-states" />
                  </div>
                </li>
              </ul>
            );
          })}
      </div>
    );
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
          {country
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
                        onClick={() => getCountryStates(countries.name)}
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
        <ShowState stateData={state} />
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
      </div>
    </div>
  );
}

export default Container;
