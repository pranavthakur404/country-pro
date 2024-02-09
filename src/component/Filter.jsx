import axios, { all } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Filter({ data, setCountryToShow }) {
  const [region, setRegion] = useState("filter by Region");

  useEffect(() => {
    async function fetchingRegion() {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/region/${region}`
        );
        setCountryToShow(res.data);
      } catch (err) {
        setCountryToShow("Some thing went wrong");
      }
    }
    if (region == "All") {
      setCountryToShow(data);
    } else if (region !== "filter by Region") {
      fetchingRegion();
    }
  }, [region]);

  return (
    <select
      name="region"
      id="region"
      value={region}
      onChange={(e) => {
        setRegion(e.target.value);
      }}
      style={{
        width: "150px",
        height: "30px",
        border: "1px solid silver",
      }}
    >
      <option value="filter by Region" hidden>
        Filter by region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="All">All</option>
    </select>
  );
}

export default Filter;
