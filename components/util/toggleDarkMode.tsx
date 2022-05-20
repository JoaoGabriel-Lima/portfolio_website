import { AnimatePresence, motion } from "framer-motion";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      localStorage.theme = "dark";
    }
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={`${isDark}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          className={`w-10 h-10 flex justify-center items-center rounded-md ${
            isDark
              ? "bg-[#FBD38D] hover:bg-[#f6ad55]"
              : "bg-[#805AD5] hover:bg-[#6b46c1]"
          }`}
          onClick={() => {
            toggleTheme();
          }}
        >
          {isDark ? (
            <RiSunLine className="text-black" />
          ) : (
            <RiMoonClearFill className="text-white" />
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
