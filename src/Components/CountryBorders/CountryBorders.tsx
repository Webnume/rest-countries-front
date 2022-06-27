import { ThemeContext, themes } from "../../theme/theme-context";
import { useContext, useEffect, useState } from "react";
import "./CountryBorders.scss";
import { useQuery } from "react-query";
import countriesService from "../../API/countriesServices";
import CountryButton from "../CountryButton/CountryButton";
import { useParams } from "react-router-dom";

function CountryBorders({ bordersCountries }: { bordersCountries: string[] }) {
  let { countryName } = useParams();
  const theme = useContext(ThemeContext);
  const {
    isLoading,
    error,
    data: borderCountries,
  } = useQuery(
    "countriesBorder",
    async () => {
      return countriesService.findByListOfCodes(bordersCountries);
    },
    { keepPreviousData: true }
  );

  if (isLoading) return <>{"Loading..."}</>;
  if (error) return <>{"An error has occurred: " + error}</>;

  return (
    <>
      {/* <div className={`main ${choosenTheme}`}> */}
      <div className="country-border">
        <h3>Border Countries:</h3>
        {"   "}
        {borderCountries === undefined && "none"}
        {borderCountries?.map((country: any, index: number) => (
          <CountryButton
            link={`/country/${country.cca3}`}
            theme={theme.theme}
            key={country.cca3}
          >
            {country.name.common}
          </CountryButton>
        ))}
      </div>
    </>
  );
}

export default CountryBorders;
