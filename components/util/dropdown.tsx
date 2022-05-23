import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";

export default function DropdownMenu() {
  const router = useRouter();

  const push = (href: string) => {
    router.push(href);
  };
  return (
    <div className="ml-2 relative text-right sm:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            aria-label="Dropdown Menu"
            className="inline-flex w-10 h-10 border-[1px] border-black/[.26] dark:border-white/[.16] items-center justify-center rounded-md bg-black bg-opacity-0 font-medium text-white hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <BiMenu className="text-xl text-black dark:text-white" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-52 border-[1px] border-white/20 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#2C2C30] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => push("/")}
                    className={`${
                      active
                        ? "underline underline-offset-1 dark:bg-white/10 bg-blue-500/10"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-normal`}
                  >
                    About
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => push("/projects")}
                    className={`${
                      active
                        ? "underline underline-offset-1 dark:bg-white/10 bg-blue-500/10"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-normal`}
                  >
                    Projects
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => push("/construction")}
                    className={`${
                      active
                        ? "underline underline-offset-1 dark:bg-white/10 bg-blue-500/10"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-normal`}
                  >
                    Posts
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => push("https://github.com/JoaoGabriel-Lima")}
                    className={`${
                      active
                        ? "underline underline-offset-1 dark:bg-white/10 bg-blue-500/10"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 pb-2 text-normal`}
                  >
                    Github
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
