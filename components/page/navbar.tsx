import NextLink from "next/link";
import DropdownMenu from "../util/dropdown";
import ThemeToggleButton from "../util/toggleDarkMode";

interface LinkItem {
  path: string;
  children?: React.ReactNode;
  href: string;
}

const LinkItem = ({ href, path, children }: LinkItem) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref scroll={false}>
      <a>
        <span
          className={`${
            active ? "dark:text-[#ff9d47] text-[#d17f38]" : ""
          } rounded text-md flex items-center`}
        >
          {children}
        </span>
      </a>
    </NextLink>
  );
};

interface NavbarProps {
  path: string;
}

const Navbar = (props: NavbarProps) => {
  const { path } = props;
  return (
    <nav className=" w-full p-2 h-14 bg-[#ffffff40] dark:bg-[#20202380] z-[1] fixed backdrop-blur-md flex justify-center items-center">
      <section className="max-w-[730px] w-full h-[40px] flex justify-between items-center">
        <div id="left" className="flex sm:ml-0 ml-3">
          <NextLink href="/" passHref scroll={false}>
            <a>
              <span className="text-black text-lg font-bold flex items-center">
                <div className="bg-[#e28b40] dark:bg-[#eb9d5a] rounded-full w-5 h-5 mr-2"></div>
                <h2 className=" font-bold tracking-tight text-gray-800  dark:text-white/[.92] text-[18px]">
                  João Lima
                </h2>
              </span>
            </a>
          </NextLink>
          <div className="sm:flex hidden ml-9 items-center gap-x-5">
            <LinkItem href={"/projects"} path={path}>
              Projects
            </LinkItem>
            <LinkItem href={"/posts"} path={path}>
              Posts
            </LinkItem>
          </div>
        </div>
        <div className=" max-h-[40px] flex items-center ">
          <ThemeToggleButton />
          <DropdownMenu />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
