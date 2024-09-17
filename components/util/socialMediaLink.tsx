import { IconType } from "react-icons";

interface LinkProps {
  title: string;
  link: string;
  icon: IconType;
}

const SocialMediaLink = ({ title, link, icon: Icon }: LinkProps) => {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={link}>
        <button className="flex justify-center items-center hover:bg-[#fda04f]/20 hover:dark:bg-[#fda04f]/10  transition-colors duration-300 px-4 py-2 rounded-md hover:underline underline-offset-[2px] text-[#d1823e] dark:text-[#fda04f]">
          <Icon className="mr-4" />
          {title}
        </button>
      </a>
    </li>
  );
};

export default SocialMediaLink;
