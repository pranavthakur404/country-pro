import { Link } from "react-router-dom";
import styles from "../component_css/CountryCard.module.css";

function CountryCard(data) {
  return (
    <Link to={`/details/${data.name.common}`} className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={data.flags.svg} alt="flag" />
        <div className={styles.details}>
          <h3 className={styles.name}>{data?.name?.common}</h3>
          <p className={styles.population}>
            <span>Population:</span> {data?.population.toLocaleString("en-IN")}
          </p>
          <p className={styles.region}>
            <span>Region:</span> {data?.region}
          </p>
          <p className={styles.capital}>
            <span>Capital:</span> {data?.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
