import React from "react";
import countriesJSON from "../geoData/countries.json";

function Countries() {
  return (
    <div className="countries">
      <div>Countries</div>
      <input type="text" placeholder="Search Countries..." />
      <div className="countryList">
        {countriesJSON.map((countries) => {
          return (
            <ul key={countries.id}>
              <li>{countries.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
