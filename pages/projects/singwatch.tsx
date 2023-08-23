import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const SingWatchProjectPage = () => {
  return (
    <Layout title={"SingWatch"}>
      <ProjectPage
        date={"2022-PRESENT"}
        title={"SingWatch"}
        description={[
          "SingWatch is an open source project that aims to find song lyrics without difficulties, after all who doesn't like to know how to sing their favorite song?",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Unfinished (Heroku is no longer free)",
          },
          {
            title: "Website",
            link: "https://sing-watch.vercel.app/",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/SingWatch",
            linkTitle: "GitHub Link",
          },
          { title: "Plataform", linkTitle: "Browser PWA" },
          {
            title: "Stack",
            linkTitle:
              "NodeJS, Next.js, MongoDB, TailwindCSS, Discord.js, Websockets, Styled-Components",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Image 1"
            src="/projects/singwatch/singwatch1.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Image 2"
            src="/projects/singwatch/singwatch2.png"
            className="w-full rounded-xl min-w-[175px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default SingWatchProjectPage;
