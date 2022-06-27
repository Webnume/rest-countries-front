import "./App.css";
import CountriesList from "./Components/CountriesList/CountriesList";
import TopColorTheme from "./Components/TopColorTheme/TopColorTheme";
import { ThemeContext, themes } from "./theme/theme-context";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setToLS } from "./utils/storage";
import CountryDetails from "./Components/CountryDetails/CountryDetails";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
    setToLS("theme", theme);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <TopColorTheme />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:name" element={<CountryDetails theme={theme}  />} />
        </Routes>
      </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
