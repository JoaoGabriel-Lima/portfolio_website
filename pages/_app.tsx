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
