import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const NotemockProjectPage = () => {
  return (
    <Layout title={"DAlianças"}>
      <ProjectPage
        date={"2024-PRESENT"}
        title={"DAlianças"}
        description={[
          "DAlianças is an e-commerce platform developed for a jewelry factory, featuring a custom online store for wholesale sales. The solution includes a detailed catalog system and personalized purchasing options, allowing clients to view and buy pendants, charms, rings, and wedding bands according to their needs. Additionally, a comprehensive admin panel was implemented, providing features for order management, discount application, and statistical analysis. The entire development was carried out using CI/CD strategies with Docker and AWS, ensuring continuous integration and efficient deployment.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Website",
            link: "https://www.daliancas.com/",
          },
          {
            title: "Private",
            linkTitle: "Source Link is private",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle:
              "NodeJS, Next.js, NestJS, TailwindCSS, Framer-Motion, PostgreSQL, TanstackQuery, Docker, AWS, Electron",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Source 1"
            src="/projects/daliancas/0.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/daliancas/1.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/daliancas/3.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/daliancas/4.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/daliancas/5.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/daliancas/6.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/daliancas/7.png"
            className="w-full rounded-xl min-h-[150px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default NotemockProjectPage;
