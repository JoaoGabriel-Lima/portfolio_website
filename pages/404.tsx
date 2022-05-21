/* eslint-disable react/no-unescaped-entities */
import NextLink from "next/link";
import Layout from "../components/layouts/page";

const NotFound = () => {
  return (
    <Layout title={"404"}>
      <div>
        <h1 className="text-3xl mb-1 sm:text-4xl big-title font-bold leading-[1.2]">
          Not found
        </h1>
        <h4>The page you're looking for was not found.</h4>
      </div>
      <hr className="my-[1.5rem] w-full opacity-60 border-gray-500/50" />
      <div className="w-full flex justify-center">
        <NextLink href="/" passHref>
          <button className="z-20 flex items-center rounded-md font-semibold px-5 h-10 text-white/90 dark:text-black bg-[#d1823e] dark:bg-[#fda04f] hover:bg-[#b97132] hover:dark:bg-[#db8c46] transition-colors">
            Return to home
          </button>
        </NextLink>
      </div>
    </Layout>
  );
};

export default NotFound;
