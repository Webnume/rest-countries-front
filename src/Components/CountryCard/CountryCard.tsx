import "./CountryCard.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CountryCard({ theme, country }: { theme: string; country: any }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className={`country-card ${theme}`}
      onClick={() => navigate(`country/${country.cca3}`)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale:1, opacity: 1 }}
      initial={{scale: 0, opacity: 0}}
    >
      <img src={country.flags.svg} alt="flag" />
      <div className="country-info">
        <h2>{country.name.common}</h2>
        <ul>
          <li>
            <span>Population: {country.population}</span>
          </li>
          <li>
            <span>Region: {country.continents[0]}</span>
          </li>
          <span>Capital: {country.capital}</span>
          <li></li>
        </ul>
      </div>
    </motion.div>
  );
}

export default CountryCard;
