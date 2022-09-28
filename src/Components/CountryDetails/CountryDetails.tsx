import "./CountryDetails.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import countriesService from "../../API/countriesServices";
import CountryBorders from "../CountryBorders/CountryBorders";
import Button from "../Button/Button";

function CountryDetails({ theme }: { theme: string }) {
  const params = useParams();

  const {
    isLoading,
    error,
    data: country,
  } = useQuery(
    ["country", params.name],
    async () => {
      return countriesService.findByCode(params.name);
    },
    { enabled: !!params.name }
  );

  const getCurrencies = (currencies: any) => {
    const currenciesArray = [];
    for (const curr in currencies) {
      currenciesArray.push(currencies[curr].name);
    }
    return currenciesArray.join(", ");
  };

  const getLanguages = (languages: any) => {
    const languagesArray = [];
    for (const lang in languages) {
      languagesArray.push(languages[lang]);
    }
    return languagesArray.join(", ");
  };

  if (isLoading)
    return (
      <div className={`main ${theme}`}>
        <span className="loader"></span>
      </div>
    );
  if (error) return <>{"An error has occurred: " + error}</>;

  const {
    name,
    capital,
    population,
    continents,
    subregion,
    currencies,
    flags,
    tld,
    languages,
    borders,
  } = country[0];

  return (
    <section className={`country-details ${theme}`}>
      <div className="content">
        <div className="left-section">
          <Button link={"/"} theme={theme}>
            {" "}
            <i className={`fa fa-arrow-left icon ${theme}`}></i>Back
          </Button>
          <img src={flags.svg} alt="flag" />
        </div>
        <div className="infos-section">
          <div className="country-info">
            <h2>{name.official}</h2>
            <ul>
              <li>
                <h3>Native Name:</h3> <span>{name.common}</span>
              </li>
              <li>
                <h3>Population:</h3> <span>{population}</span>
              </li>
              <li>
                <h3>Region:</h3> <span>{continents[0]}</span>
              </li>
              <li>
                <h3>Sub Region:</h3> <span>{subregion}</span>
              </li>
              <li>
                <h3>Capital:</h3> <span>{capital}</span>
              </li>

              <span>
                {tld ? (
                  <li>
                    <h3>Top Level Domain:</h3>
                    {tld[0]}
                  </li>
                ) : null}
              </span>

              <li>
                <h3>Currencies:</h3> <span>{getCurrencies(currencies)}</span>
              </li>
              <li>
                <h3>Languages:</h3> <span>{getLanguages(languages)}</span>
              </li>
            </ul>
            {borders ? <CountryBorders bordersCountries={borders} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
