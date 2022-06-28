import { useNavigate } from "react-router-dom";
import "./Button.scss";
import { motion } from "framer-motion";

function Button({
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
      className={
        link === "/" ? `button home ${theme}` : `button ${theme}`
      }
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
