import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const RastrosPerdidosPage = () => {
  return (
    <Layout title={"Rastros Perdidos"}>
      <ProjectPage
        date={"2023"}
        title={"Rastros Perdidos"}
        description={[
          "A 16-bit RPG-style investigation game with 8-way gameplay, in which the player takes on the role of a female detective who is investigating a murder in a village.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Institution",
            linkTitle: "Universidade Federal Fluminense",
          },
          {
            title: "My Duo",
            linkTitle: "Yumi Nakashima",
            link: "https://github.com/lynakashima",
          },
          {
            title: "Itch.io",
            link: "https://joaolima.itch.io/rastros-perdidos",
            linkTitle: "Itch.io Link",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/rastros-perdidos",
            linkTitle: "GitHub Link",
          },
          {
            title: "Trailer",
            link: "https://www.youtube.com/watch?v=Yun7S_ZZPfA",
            linkTitle: "Youtube Link",
          },
          { title: "Plataform", linkTitle: "Windows" },
          {
            title: "Stack",
            linkTitle: "Python, Pygame, PyTMX, Tiled",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Image 1"
            src="/projects/rastros_perdidos/1.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Image 2"
            src="/projects/rastros_perdidos/2.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Image 3"
            src="/projects/rastros_perdidos/3.png"
            className="w-full rounded-xl min-w-[175px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default RastrosPerdidosPage;
