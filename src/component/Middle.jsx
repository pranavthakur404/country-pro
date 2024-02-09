import SearchBar from "./SearchBar";
import Filter from "./Filter";
import styles from "../component_css/Middle.module.css";

function Middle({ data, setCountryToShow }) {
  return (
    <div className={styles.middle}>
      <SearchBar data={data} setCountryToShow={setCountryToShow} />
      <Filter data={data} setCountryToShow={setCountryToShow} />
    </div>
  );
}

export default Middle;
