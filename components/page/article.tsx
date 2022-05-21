import { motion } from "framer-motion";
import React from "react";

interface ArticleProps {
  children: React.ReactNode;
  delay: number;
  title?: string;
  margin?: number;
}

const Section = ({ children, delay = 0, title, margin = 4 }: ArticleProps) => (
  <motion.section
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    className="mb-6 flex flex-col items-start w-full"
  >
    {title && (
      <h2
        className={`text-xl mb-4 mt-${margin} underline underline-offset-[6px] decoration-[4px] decoration-[#525252] font-semibold`}
      >
        {title}
      </h2>
    )}
    {children}
  </motion.section>
);

export default Section;
