import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const FutopProjectPage = () => {
  return (
    <Layout title={"Futop"}>
      <ProjectPage
        date={"2022"}
        title={"Futop"}
        description={[
          "Futop is a project developed for the RISE Global Challenge with the aim of promoting accessibility to high-quality information for young people. We want to raise the level of education and promote social equality through opportunities that interest you, focusing on the ideal of aptitude in your own area of ​​knowledge and studying by will instead of obligation.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Private",
            linkTitle: "Source Link is private",
          },
          {
            title: "Website",
            link: "https://futop.ga/",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle:
              "Next.js, TailwindCSS, HeadlessUI, Styled-Components, SWR, MongoDB, NextAuth, Framer-Motion, Node.js",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Image 1"
            src="/projects/futop/futop1.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Image 2"
            src="/projects/futop/futop2.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Image 3"
            src="/projects/futop/futop3.png"
            className="w-full rounded-xl min-w-[175px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default FutopProjectPage;
