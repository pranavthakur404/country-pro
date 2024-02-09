import axios from "axios";
import Middle from "../component/Middle";
import { useLoaderData } from "react-router-dom";
import CountryList from "../component/CountryList";
import { useState } from "react";
export async function loader() {
  try {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    const resData = res;
    return { data: resData.data };
  } catch (err) {
    console.log(err.message);
  }
}

function Home() {
  const { data } = useLoaderData();
  const [countryToShow, setCountryToShow] = useState(data);
  return (
    <div>
      <Middle data={data} setCountryToShow={setCountryToShow} />
      <CountryList countryToShow={countryToShow} />
    </div>
  );
}

export default Home;
