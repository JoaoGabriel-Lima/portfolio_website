import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { FaDev } from "react-icons/fa";

interface LinkProps {
  title: string;
  link: string;
  icon: number;
}

const SocialMediaLink = ({ title, link, icon }: LinkProps) => {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={link}>
        <button className="flex justify-center items-center hover:bg-[#fda04f]/20 hover:dark:bg-[#fda04f]/10  transition-colors duration-300 px-4 py-2 rounded-md hover:underline underline-offset-[2px] text-[#d1823e] dark:text-[#fda04f]">
          {icon == 1 && <AiFillGithub className="mr-4" />}
          {icon == 2 && <AiOutlineTwitter className="mr-4" />}
          {icon == 3 && <AiOutlineInstagram className="mr-4" />}
          {icon == 4 && <FaDev className="mr-4" />}
          {title}
        </button>
      </a>
    </li>
  );
};

export default SocialMediaLink;
