import { useNavigate } from "react-router-dom";
import "./CountryButton.scss";
import { motion } from "framer-motion"

function CountryButton({
  children,
  link,
  theme,
}: {
  children: any;
  link: string;
  theme: string;
}) {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate(link)}
      className={`country-button ${theme}`}
      style={
        link === "/"
          ? {
              justifyContent: "normal",
              margin: "3rem 0",padding: ".5rem 1.5rem",
            }
          : {}
      }
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}

export default CountryButton;
