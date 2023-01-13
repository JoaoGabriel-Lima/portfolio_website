import Layout from "../../components/layouts/page";
import PostGrid from "../../components/posts/postgrid";

// interface PostProps {
//   id: number;
//   title: string;
//   thumbnail: string;
//   path: string;
// }

const Posts = ({ posts }: any) => {
  return (
    <Layout title={"Projects"}>
      <div>
        <h1 className="text-xl mb-4 sm:text-xl big-title font-bold leading-[1.2]">
          Popular Posts
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-[1.5rem]">
          {posts.map((post: any) => (
            <PostGrid
              key={post.id}
              id={post.path}
              title={post.title}
              thumbnail={post.cover_image}
              isdone
            ></PostGrid>
          ))}
        </section>
      </div>
    </Layout>
  );
};
Posts.getInitialProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=joaolima");
  const json = await res.json();
  return { posts: json };
};

export default Posts;
