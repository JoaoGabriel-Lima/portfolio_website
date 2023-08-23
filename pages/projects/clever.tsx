import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const CleverProjectPage = () => {
  return (
    <Layout title={"Clever"}>
      <ProjectPage
        date={"2022"}
        title={"Clever"}
        description={[
          "A Node.js backend component that is part of the larger Clever project. Developed with a focus on enhancing my cybersecurity expertise, this backend employs techniques like cookies, JWT, and more. It serves as a practical platform for me to delve into the realm of information security.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Website",
            link: "https://clever-web.vercel.app/",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/Clever",
            linkTitle: "GitHub Link",
          },
          {
            title: "Backend",
            link: "https://github.com/JoaoGabriel-Lima/Clever-Backend",
            linkTitle: "GitHub Link",
          },
          {
            title: "Article",
            link: "https://dev.to/joaolima/how-to-secure-sensitive-endpoints-using-jwt-in-nodejs-468k",
            linkTitle: "How to secure sensitive endpoints using JWT in Node.js",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle:
              "NodeJS, Next.js, MongoDB, TailwindCSS, Prima, JWT, SQLite, Websockets, Styled-Components",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Image 1"
            src="/projects/clever/1.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Image 2"
            src="/projects/clever/2.png"
            className="w-full rounded-xl min-w-[175px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default CleverProjectPage;
