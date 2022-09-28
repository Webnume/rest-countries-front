import { ThemeContext, themes } from "../../theme/theme-context";
import { useContext, useEffect, useState } from "react";
import "./CountriesList.scss";
import SearchInput from "../SearchInput/SearchInput";
import SelectRegion from "../SelectRegion/SelectRegion";
import CountryCard from "../CountryCard/CountryCard";
import { useQuery } from "react-query";
import countriesService from "../../API/countriesServices";

function CountriesList() {
  const {
    isLoading,
    error,
    data: countries,
  } = useQuery(
    "countries",
    async () => {
      return countriesService.findAll();
    },
    { keepPreviousData: true }
  );

  const { theme } = useContext(ThemeContext);
  const choosenTheme = theme === themes.dark ? "dark" : "light";

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [filteredCountriesList, setFilteredCountriesList] = useState(countries);

  const handleSearch = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleRegion = (e: any) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    if (!region && !search) return setFilteredCountriesList(countries);
    if (!region && search) {
      return setFilteredCountriesList(
        countries?.filter((country: any) =>
          country.name.common.toLowerCase().includes(search)
        )
      );
    }
    if (region && !search) {
      return setFilteredCountriesList(
        countries?.filter(
          (country: any) => country.region.toLowerCase() === region
        )
      );
    }
    if (region && search) {
      return setFilteredCountriesList(
        countries?.filter(
          (country: any) =>
            country.name.common.toLowerCase().includes(search) &&
            country.region.toLowerCase() === region
        )
      );
    }
  }, [countries, search, region]);

  if (isLoading)
    return (
      <div className={`main ${choosenTheme}`}>
        <span className="loader"></span>
      </div>
    );

  if (error) return <>{"An error has occurred: " + error}</>;
  if (!countries) {
    console.error("No data here!");
    return <></>;
  }

  return (
    <>
      <div className={`main ${choosenTheme}`}>
        <div className="filters">
          <SearchInput theme={choosenTheme} onChange={handleSearch} />
          <SelectRegion theme={choosenTheme} onChange={handleRegion} />
        </div>
        <div className="countries-list">
          {filteredCountriesList?.length === 0 && "No results found"}
          {filteredCountriesList?.map((country: any, index: number) => (
            <CountryCard key={index} country={country} theme={choosenTheme} />
          ))}
        </div>

        {/* <CountryCard theme={choosenTheme} /> */}
      </div>
    </>
  );
}

export default CountriesList;
