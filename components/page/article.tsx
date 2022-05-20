import { motion } from "framer-motion";
import React from "react";

interface ArticleProps {
  children: React.ReactNode;
  delay: number;
}

const Section = ({ children, delay = 0 }: ArticleProps) => (
  <motion.section
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    className="mb-6 flex flex-col items-start w-full"
  >
    {children}
  </motion.section>
);

export default Section;
