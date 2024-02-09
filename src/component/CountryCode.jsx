import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountryCode({ border }) {
  const [fullname, setFullname] = useState("");
  useEffect(() => {
    async function fetching() {
      const res = await axios(`https://restcountries.com/v3.1/alpha/${border}`);
      setFullname(res?.data[0]?.name?.common);
    }
    fetching();
  }, []);

  return (
    <>
      {fullname && (
        <p>
          <Link to={`/details/${fullname}`}>{fullname}</Link>
        </p>
      )}
    </>
  );
}

export default CountryCode;
