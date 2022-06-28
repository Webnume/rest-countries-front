import ThemeTogglerButton from "../ThemeTogglerButton/ThemeTogglerButton";
import { ThemeContext, themes } from "../../theme/theme-context";
import { useContext } from "react";
import "./TopColorTheme.scss";

function TopColorTheme() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`top ${theme === themes.dark ? "dark" : "light"}`}>
        <h1>Where in the world?</h1>
        <ThemeTogglerButton />
      </div>
    </>
  );
}

export default TopColorTheme;
