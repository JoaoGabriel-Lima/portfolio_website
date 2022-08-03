import NextLink from "next/link";

interface PostGridProps {
  id: string;
  title: string;
  thumbnail: string;
  isdone?: boolean;
}

const PostGrid = ({ id, title, thumbnail, isdone = false }: PostGridProps) => {
  return (
    <NextLink
      href={isdone ? `https://dev.to${id}` : "/construction"}
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
        <h4 className="text-lg text-center mb-3 mt-4">{title}</h4>
      </div>
    </NextLink>
  );
};

export default PostGrid;
