/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts/page";
import Section from "../components/page/article";
import { IoIosArrowForward } from "react-icons/io";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="flex justify-start items-center flex-col w-full">
        <div className="mb-[24px] bg-white/[.36] dark:bg-white/[.08] backdrop-blur-md py-[12px] rounded-lg w-full flex justify-center items-center">
          <h4 className="text-center px-2">
            Hello, I'm a Brazilian fullstack developer!
          </h4>
        </div>
        <section className="flex justify-start flex-col md:flex-row md:justify-between w-full items-start gap-x-6 flex-wrap gap-y-4">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl big-title font-bold leading-[1.2]">
              João Lima
            </h1>
            <h3 className="tracking-wide text-base">
              Full-stack developer and UI/UX designer
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-auto ">
            <img
              src="/profile.jpeg"
              alt="Profile Picture"
              className="rounded-full w-full border-white border-[2px] max-w-[96px]"
            />
          </div>
        </section>
        <Section delay={0.1}>
          <h2 className="text-xl my-4 underline underline-offset-[6px] decoration-[4px] decoration-[#525252] font-semibold">
            About me
          </h2>
          <p className="text-base text-justify indent-[1em]">
            I am a freelance and a full-stack developer based in Brazil with a
            passion for building digital services/stuff I want. I have a knack
            for all things launching products, from planning and designing all
            the way to solving real-life problems with code.
          </p>
        </Section>
        <Section delay={0.2}>
          <h2 className="text-xl my-4 underline underline-offset-[6px] decoration-[4px] decoration-[#525252] font-semibold">
            Tech Stack
          </h2>
          <p className="text-base text-justify indent-[1em]">
            Currently, I keep my focus on backend and frontend development using
            technologies such as JavaScript, Typescript, Next.js, Flutter,
            Node.js and GraphQL.
          </p>
          <div className="w-full flex justify-center mt-4">
            <button className="flex items-center rounded-md font-semibold px-5 h-10 text-white/90 dark:text-black bg-[#d1823e] dark:bg-[#ffa352] hover:bg-[#b97132] hover:dark:bg-[#e6934b] transition-colors">
              My projects
              <IoIosArrowForward className="pl-2 font-bold text-xl" />
            </button>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default Home;
