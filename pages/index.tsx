/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts/page";
import Section from "../components/page/article";
import { IoIosArrowForward } from "react-icons/io";
import NextLink from "next/link";
import SocialMediaLink from "../components/util/socialMediaLink";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="_MXiBrOYQrfyrecEbgYR3d5NQbZvB1cQtNYYLJhbiKk"
        />
      </Head>
      <main className="flex justify-start items-center flex-col w-full">
        <div className="mb-[24px] bg-white/[.36] dark:bg-white/[.08] backdrop-blur-md py-[12px] rounded-lg w-full flex justify-center items-center">
          <p className="text-center px-2">
            Hello, I'm a Brazilian full-stack developer!
          </p>
        </div>
        <section className="flex justify-start flex-col md:flex-row md:justify-between w-full items-start gap-x-6 flex-wrap gap-y-4">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl big-title font-bold leading-[1.2]">
              João Lima
            </h1>
            <h2 className="tracking-wide text-base">
              Full-stack developer and UI/UX designer
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-auto ">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="rounded-full w-full border-white border-[2px] max-w-[96px]"
            />
          </div>
        </section>
        <Section delay={0.1} title="About me" margin={4}>
          <p className="text-base text-justify indent-[1em]">
            I am a freelancer and a full-stack developer, currently based in
            Brazil, with a passion for applying my knowledge to solve real-life
            problems building unique products. I believe that my projects can
            help people who are starting to develop digital products, so I
            maintain open-source software for the community.
          </p>
        </Section>
        <Section delay={0.2} title="Tech Stack">
          <p className="text-base text-justify indent-[1em]">
            Currently, I keep my focus on backend and frontend development using
            technologies such as JavaScript, Typescript, Next.js, Flutter,
            Node.js and GraphQL.
          </p>
          <div className="w-full flex justify-center mt-4">
            <NextLink href={"/projects"} passHref scroll={false}>
              <button className="flex items-center rounded-md font-semibold px-5 h-10 text-white/90 dark:text-black bg-[#d1823e] dark:bg-[#fda04f] hover:bg-[#b97132] hover:dark:bg-[#db8c46] transition-colors">
                My projects
                <IoIosArrowForward className="pl-2 font-bold text-xl" />
              </button>
            </NextLink>
          </div>
        </Section>
        <Section delay={0.3} margin={0} title="I ♥">
          <p className="text-base text-justify indent-[1em]">
            Machine Learning, Teaching other people, Art, Music, Drawing,
            Photography
          </p>
        </Section>
        <Section delay={0.4} title="On the web">
          <ul>
            <SocialMediaLink
              title="@JoaoGabriel-Lima"
              icon={1}
              link={"https://github.com/JoaoGabriel-Lima"}
            />
            <SocialMediaLink
              title="@joaolima"
              icon={4}
              link={"https://dev.to/joaolima"}
            />
            <SocialMediaLink
              title="@juaozin__"
              icon={2}
              link={"https://twitter.com/juaozin__"}
            />
            <SocialMediaLink
              title="@marinho.jao"
              icon={3}
              link={"https://www.instagram.com/marinho.jao/"}
            />
          </ul>
        </Section>
      </main>
    </Layout>
  );
};

export default Home;
