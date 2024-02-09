import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from "../pages_css/CountryDetails.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CountryCode from "../component/CountryCode";

export async function loader(args) {
  const fullName = args.params.name;
  try {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${fullName}?fullText=true`
    );
    console.log(res.data);
    return res.data[0];
  } catch (err) {
    throw new Error("Something Went Wrong...");
  }
}

function CountryDetails() {
  function handleClick() {
    history.back();
  }

  const data = useLoaderData();
  return (
    <>
      <button onClick={handleClick} className={styles.backBtn}>
        <FaLongArrowAltLeft /> Back
      </button>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={data?.flags?.svg} alt={data?.name?.common} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.countryName}>{data?.name?.common}</h3>
          <div className={styles.moreinfo}>
            <div>
              <p>
                <b>Native Name: </b>
                {Object.values(data?.name?.nativeName)[0].common}
              </p>
              <p>
                <b>Population: </b>
                {data?.population.toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region: </b>
                {data?.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {data?.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {data.capital.join(", ")}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain: </b>
                {data?.tld.join(", ")}
              </p>
              <p>
                <b>Currencies: </b>
                {Object.values(data?.currencies)[0]?.name}
              </p>
              <p>
                <b>Languages: </b>
                {Object.values(data?.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className={styles.borders}>
            <h3>Border Countries: </h3>
            {data?.borders?.map((border, index) => {
              return <CountryCode key={index} border={border} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
