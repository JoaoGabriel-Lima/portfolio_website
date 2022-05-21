// import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-6 opacity-40 text-center flex flex-col justify-center items-center w-full text-sm">
      <span>
        &copy; {new Date().getFullYear()} João Lima. All Rights Reserved.
      </span>
      {/* <Link href={"https://www.craftz.dog/"}>
        <span className="cursor-pointer hover:underline">
          Based on craftz.dog
        </span>
      </Link> */}
    </div>
  );
};

export default Footer;
