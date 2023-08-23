/* eslint-disable react/no-unescaped-entities */
import Layout from "../../components/layouts/page";
import ProjectGrid from "../../components/projects/projectgrid";

const Projects = () => {
  return (
    <Layout title={"Projects"}>
      <div>
        <h1 className="text-xl mb-4 sm:text-xl big-title font-bold leading-[1.2]">
          Projects
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-[1.5rem]">
          <ProjectGrid
            id={"portfolio_website"}
            title={"This portfolio"}
            thumbnail={"/thumbs/portfolio.jpg"}
            isdone
          >
            My portfolio where I store all my projects, collaborations, and
            posts.
          </ProjectGrid>
          <ProjectGrid
            id={"notemock"}
            title={"Notemock"}
            thumbnail={"/thumbs/notemock.jpg"}
            isdone
          >
            A to-do list website made with Next.js focused on students and
            developers.
          </ProjectGrid>
          <ProjectGrid
            id={"rastros_perdidos"}
            title={"Rastros Perdidos"}
            thumbnail={"/thumbs/rastros_perdidos.jpg"}
            isdone
          >
            A 16-bit RPG-style investigation game with 8-way gameplay, in which
            the player takes on the role of a female detective who is
            investigating a murder in a village.
          </ProjectGrid>
          <ProjectGrid
            id={"lookface"}
            title={"Lookface"}
            thumbnail={"/thumbs/lookface.jpg"}
            isdone
          >
            A face recognition website that uses the power of TensorFlow.js and
            WebAssembly
          </ProjectGrid>
          <ProjectGrid
            id={"singwatch"}
            title={"SingWatch"}
            thumbnail={"/thumbs/singwatch.jpg"}
            isdone
          >
            An open-source project that aims to let you sync music into discord
            server with Hydra music bot.
          </ProjectGrid>
          <ProjectGrid
            id={"clever"}
            title={"Clever"}
            thumbnail={"/thumbs/clever.jpg"}
            isdone
          >
            Clever is a web application focused on secure backend service.
          </ProjectGrid>
        </section>
        <hr className="my-[1.5rem] w-full opacity-60 border-gray-500/50" />
        <h1 className="text-xl mb-4 sm:text-xl big-title font-bold leading-[1.2]">
          Collaborations
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-[1.5rem]">
          <ProjectGrid
            id={"futop"}
            title={"Futop"}
            thumbnail={"/thumbs/futop.jpg"}
            isdone
          >
            A project developed for the RISE Global Challenge with the aim of
            promoting access to high-quality information for young people.
          </ProjectGrid>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
