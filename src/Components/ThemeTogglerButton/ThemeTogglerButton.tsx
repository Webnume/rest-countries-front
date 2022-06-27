import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeContext } from "../../theme/theme-context";
import "./ThemeTogglerButton.scss";

function ThemeTogglerButton() {
  const [move, setMove] = useState(false);
  // Le Theme Toggler Button reçoit non seulement le thème
  // mais aussi une fonction toggleTheme du contexte
  const handleClick = () => {
    setMove(!move);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <motion.div
          onClick={() => {
            toggleTheme();
            handleClick();
          }}
          className={`theme-toggler-button ${
            theme === "dark" ? "dark" : "light"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ x: move ? 15 : -15 }}
        >
          <div style={{display:"flex"}}>
          { theme === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          { theme === "dark" ? "Light Mode" : "Dark Mode"}
          </div>
        </motion.div>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
