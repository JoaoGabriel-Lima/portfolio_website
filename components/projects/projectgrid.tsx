import NextLink from "next/link";

interface ProjectGridProps {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: string;
  isdone?: boolean;
}

const ProjectGrid = ({
  children,
  id,
  title,
  thumbnail,
  isdone = false,
}: ProjectGridProps) => {
  return (
    <NextLink
      href={isdone ? `/projects/${id}` : "/construction"}
      passHref
      scroll={false}
    >
      <div className="mb-6 cursor-pointer w-full flex justify-start items-center flex-col">
        <div className="relative w-full h-auto">
          <img
            className="rounded-xl h-auto w-full"
            src={thumbnail}
            alt={title}
          />
        </div>
        <h4 className="text-xl text-center mb-1 mt-4">{title}</h4>
        <p className="text-sm text-center">{children}</p>
      </div>
    </NextLink>
  );
};

export default ProjectGrid;
