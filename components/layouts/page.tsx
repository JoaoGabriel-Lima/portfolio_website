import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: PageLayoutProps) => {
  const t = `${title} - João Lima`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
      </>
    </motion.article>
  );
};

export default Layout;
