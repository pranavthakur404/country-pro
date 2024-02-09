import React, { useEffect, useState } from "react";
import styles from "../component_css/SearchBar.module.css";

function SearchBar({ data, setCountryToShow }) {
  const [input, setInput] = useState("");
  let searhData = [];
  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (input.length > 0) {
      data.forEach((country) => {
        if (country.name.common.toLowerCase().includes(input.toLowerCase())) {
          searhData.push(country);
        }
      });
      setCountryToShow(searhData);
    } else {
      searhData = data;
      setCountryToShow(searhData);
    }
  }, [input]);

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      style={{
        width: "200px",
        padding: "3px",
        border: "1px solid silver",
      }}
    >
      <input
        type="text"
        value={input}
        placeholder="Search.."
        className={styles.input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
        }}
      />
    </form>
  );
}

export default SearchBar;
