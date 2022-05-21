import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layouts/main";
import { LayoutStyle } from "../styles/components/layout";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <LayoutStyle>
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </LayoutStyle>
  );
}

export default MyApp;
