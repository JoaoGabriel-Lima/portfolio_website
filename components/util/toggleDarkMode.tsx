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
      document.documentElement.setAttribute("data-color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      document.documentElement.setAttribute("data-color-scheme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-color-scheme", "light");
      setIsDark(false);
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-color-scheme", "dark");
      setIsDark(true);
      localStorage.theme = "dark";
    }
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={`${isDark}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          aria-label={`${isDark ? "Light" : "Dark"} mode`}
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
