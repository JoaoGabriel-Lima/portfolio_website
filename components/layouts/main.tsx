import dynamic from "next/dynamic";
import Head from "next/head";
import { Router } from "next/router";
import React from "react";
import MyRoomLoader from "../model/room-loader";
import Footer from "../page/footer";
import Navbar from "../page/navbar";

const LazyRoom = dynamic(() => import("../model/modelLoader"), {
  ssr: false,
  loading: () => <MyRoomLoader />,
});

interface MainLayoutProps {
  children: React.ReactNode;
  router: Router;
}

const Main = ({ children, router }: MainLayoutProps) => {
  return (
    <section>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#eb9d5a"></meta>
        <meta
          name="description"
          content="I am a freelancer and a full-stack developer, currently based in
            Brazil, with a passion for applying my knowledge to solve real-life
            problems building unique products. I believe that my projects can
            help people who are starting to develop digital products, so I
            maintain open-source software for the community."
        />
        <meta name="author" content="João Gabriel Lima Marinho" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://joaolima.vercel.app/" />
        <meta name="twitter:creator" content="João Lima" />

        <meta property="og:site_name" content="João's Portfolio" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I am a freelancer and a full-stack developer, currently based in
            Brazil, with a passion for applying my knowledge to solve real-life
            problems building unique products. I believe that my projects can
            help people who are starting to develop digital products, so I
            maintain open-source software for the community."
        />

        <meta property="og:image" content="/profile6.jpg" />
        <meta property="twitter:image" content="/profile6.jpg" />
        <meta name="twitter:title" content="João Lima - Homepage" />
        <meta name="og:title" content="João Lima - Homepage" />
        <title>João Lima - Homepage</title>
      </Head>
      <main className="transition-colors duration-300 w-full px-8 pb-8 max-w-full h-auto min-h-screen dark:text-white/[.92]  bg-[#f0e7db] dark:bg-[#202023] flex items-center flex-col ">
        <Navbar path={router.asPath} />
        <div className="flex justify-center items-center md:max-w-[640px] max-w-[480px] w-full relative md:h-[376px] h-[336px] mt-[-120] mb-[-200] ">
          <LazyRoom />
        </div>
        <div className=" w-full max-w-[485.5px] ">
          {children}
          <Footer />
        </div>
      </main>
    </section>
  );
};

export default Main;
