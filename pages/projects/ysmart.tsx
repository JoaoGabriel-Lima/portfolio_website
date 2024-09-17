import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const YSMARTProjectPage = () => {
  return (
    <Layout title={"YSMART"}>
      <ProjectPage
        date={"2023-PRESENT"}
        title={"YSMART"}
        description={[
          "The YSMART project involved developing a frontend solution for a system designed to enhance the Brazilian electrical sector. This system includes capabilities for monitoring, diagnosis, and decision support in digital substations. The project ensures compliance with ONS requirements and aims to improve efficiency and safety in the sector. As part of this project, I oversee and develop the company's website frontend, as well as its various solutions. Key to the project's success was the implementation of effective SEO strategies, which contributed to achieving a top ranking on Google Search. The frontend development features real-time data visualization and user-friendly interfaces to support operational needs, built with modern web technologies for robust and scalable performance in critical infrastructure management.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Website",
            link: "https://www.ysmart.com.br/",
          },
          {
            title: "Private",
            linkTitle: "Source Link is private (Running on Vercel)",
          },
          { title: "Plataform", linkTitle: "Browser, Desktop" },
          {
            title: "Stack",
            linkTitle:
              "Next.js, TailwindCSS, Framer-Motion, Electron (Subproject)",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Source 1"
            src="/projects/ysmart/1.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 1"
            src="/projects/ysmart/2.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 1"
            src="/projects/ysmart/3.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 1"
            src="/projects/ysmart/4.png"
            className="w-full rounded-xl min-h-[150px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default YSMARTProjectPage;
