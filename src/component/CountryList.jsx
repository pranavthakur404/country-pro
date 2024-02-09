import CountryCard from "./CountryCard";
import styles from "../component_css/CountryList.module.css";
import { useState } from "react";

function CountryList({ countryToShow }) {
  if (countryToShow.length == 0) {
    return <h1>Not Found !!</h1>;
  }

  if (typeof countryToShow == "string") {
    return <h1>{countryToShow}</h1>;
  }

  const [limit, setLimit] = useState(12);
  const showing = countryToShow.slice(0, limit);

  function loadmore() {
    setLimit(limit + 12);
  }

  return (
    <>
      <div className={styles.countryListContainer}>
        {showing &&
          showing.map((country) => {
            return <CountryCard key={country.name.common} {...country} />;
          })}
      </div>
      {showing.length == countryToShow.length ? null : (
        <button className={styles.loadMoreBtn} onClick={loadmore}>
          Load More
        </button>
      )}
    </>
  );
}

export default CountryList;
