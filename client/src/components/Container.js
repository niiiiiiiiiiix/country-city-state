import "./Container.css";
import { useState, useEffect } from "react";
import { HiInformationCircle, HiArrowCircleRight } from "react-icons/hi";
import axios from "axios";

function Container() {
  const [country, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

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
    setCity([]);
  }

  function ShowStates({ stateData }) {
    if (stateData.length !== 0) {
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
                    <div className="flag-name-iso2">
                      <div className="state-name">{states.name}</div>
                      <div className="state-code">{states.state_code}</div>
                    </div>
                    <div className="icons">
                      <div className="more-info">
                        <HiInformationCircle onClick={() => moreInfo()} />
                        <div class="more-info-text">More Details</div>
                      </div>
                      <div className="show-next">
                        <HiArrowCircleRight
                          onClick={() => getStateCities(states.name)}
                        />
                        <div class="show-next-text">Show Cities</div>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      );
    } else {
      return (
        <div className="empty">Please select a country with states...</div>
      );
    }
  }

  function getStateCities(value) {
    const stateData = state.find((element) => element.name === value);
    const cityData = stateData.cities;
    setCity(cityData);
  }

  function ShowCities({ cityData }) {
    if (cityData.length !== 0) {
      return (
        <div className="countryList">
          {cityData
            .filter((cities) => {
              if (searchCity === "") {
                return cities;
              } else if (
                cities.name.toLowerCase().includes(searchCity.toLowerCase())
              ) {
                return cities;
              }
            })
            .map((cities) => {
              return (
                <ul key={cities.id}>
                  <li>
                    {cities.name}
                    <div className="icons">
                      <div className="more-info">
                        <HiInformationCircle onClick={() => moreInfo()} />
                        <div class="more-info-text">More Details</div>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      );
    } else {
      return <div className="empty">Please select a state with cities...</div>;
    }
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
                    <div className="flag-name-iso2">
                      <div className="emoji">{countries.emoji}</div>
                      <div className="country-name">{countries.name}</div>
                      <div className="iso2">{countries.iso2}</div>
                    </div>
                    <div className="icons">
                      <div className="more-info">
                        <HiInformationCircle onClick={() => moreInfo()} />
                        <div class="more-info-text">More Details</div>
                      </div>
                      <div className="show-next">
                        <HiArrowCircleRight
                          onClick={() => getCountryStates(countries.name)}
                        />
                        <div class="show-next-text">Show States</div>
                      </div>
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
        <ShowStates stateData={state} />
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
        <ShowCities cityData={city} />
      </div>
    </div>
  );
}

export default Container;
