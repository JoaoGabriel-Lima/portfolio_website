import Link from "next/link";
import ThemeToggleButton from "../util/toggleDarkMode";

const Navbar = () => {
  return (
    <nav className="w-full p-2 h-14 bg-[#ffffff40] dark:bg-[#20202380] z-[1] fixed backdrop-blur-md flex justify-center items-center">
      <section className="max-w-[730px] w-full h-[40px] flex justify-between items-center">
        <div id="left" className="flex sm:ml-0 ml-3">
          <Link href="/">
            <a>
              <span className="text-black text-lg font-bold flex items-center">
                <div className="bg-[#e28b40] dark:bg-[#eb9d5a] rounded-full w-5 h-5 mr-2"></div>
                <h2 className=" font-bold tracking-tight text-gray-800  dark:text-white/[.92] text-[18px]">
                  João Lima
                </h2>
              </span>
            </a>
          </Link>
          <div className="sm:flex hidden ml-9 items-center gap-x-5">
            <a>
              <span className=" text-md flex items-center">Projects</span>
            </a>
            <a>
              <span className="text-md flex items-center">Posts</span>
            </a>
          </div>
        </div>
        <div className="max-w-[40px] max-h-[40px]">
          <ThemeToggleButton />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
