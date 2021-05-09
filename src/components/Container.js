import React from "react";
import Countries from "./Countries";
import States from "./States";
import Cities from "./Cities";

function Container() {
  return (
    <div className="container">
      <Countries />
      <States />
      <Cities />
    </div>
  );
}

export default Container;
