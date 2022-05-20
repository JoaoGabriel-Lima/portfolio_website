import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layouts/main";
import { LayoutStyle } from "../styles/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutStyle>
      <Layout>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </LayoutStyle>
  );
}

export default MyApp;
