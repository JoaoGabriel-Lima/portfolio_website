import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import NextLink from "next/link";

interface ProjectPageProps {
  children?: React.ReactNode;
  date: string;
  title: string;
  description: Array<string>;
  links: Array<{
    title: string;
    link?: string;
    linkTitle?: string;
  }>;
}

interface LinksProps {
  link?: string;
  linkTitle?: string;
  title: string;
}

const ProjectPage = ({
  children,
  date,
  title,
  description,
  links,
}: ProjectPageProps) => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start">
      <div className="mb-4 flex items-end flex-wrap">
        <div className="flex items-end">
          <NextLink href="/projects" passHref>
            <a className="text-base underline-offset-[3px] hover:underline outline-2 outline-offset-2 cursor-pointer dark:text-[#ff63c3] text-[#3d7aed]">
              Projects
            </a>
          </NextLink>
          <MdOutlineKeyboardArrowRight className="text-base mx-[3px] mb-[2px]" />
        </div>
        <div className="flex items-end">
          <h3 className="text-xl font-semibold big-title">{title}</h3>
          <span className="text-center hover:underline cursor-pointer tracking-wider text-xs px-1 bg-gray-100 dark:bg-[#e2e8f0]/[.16] font-bold rounded-[2px] mb-1 ml-[5px]">
            {date}
          </span>
        </div>
      </div>
      <div>
        {description.map((item, index) => (
          <p key={index} className="text-base text-justify indent-[1em] ">
            {item}
          </p>
        ))}
      </div>
      <div className="my-4 ml-4 w-full">
        <ul className="w-full">
          {links.map((item: LinksProps, index: number) => (
            <li key={index} className="break-words">
              <span className="rounded-[2px] hover:underline cursor-pointer tracking-wider uppercase text-xs py-[1px] px-1 dark:text-green-200 text-green-800 bg-green-100 dark:bg-[#9ae6b4]/[.16] font-bold  mr-[8px]">
                {item.title}
              </span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center underline-offset-[3px] hover:underline outline-2 outline-offset-2 cursor-pointer dark:text-[#ff63c3] text-[#3d7aed]"
                >
                  <span>
                    {item.linkTitle || item.link}{" "}
                    <HiOutlineExternalLink className=" text-base w-[20px] inline-block" />
                  </span>
                </a>
              ) : (
                <span>{item.linkTitle}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default ProjectPage;
