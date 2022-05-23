import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const PortfolioProjectPage = () => {
  return (
    <Layout title={"Portfolio"}>
      <ProjectPage
        date={"2022-PRESENT"}
        title={"Portfolio"}
        description={[
          "My portfolio where I store all my projects, collaborations, and posts. This project was made from scratch by me and inspired by Takuya Matsuyama's portfolio UI.",
        ]}
        links={[
          {
            title: "Website",
            link: "http://joaolima.vercel.app/",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/portfolio_website",
            linkTitle: "GitHub Link",
          },
          {
            title: "INSPIRATION",
            linkTitle: "Takuya Matsuyama Portfolio",
            link: "https://github.com/craftzdog/craftzdog-homepage",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle:
              "Next.js, Three.js, TailwindCSS, HeadlessUI, Framer-Motion, Styled-Components",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          {/* <img
            src="/projects/notemock/tablet.png"
            className="w-full rounded-xl"
          />
          <img
            src="/projects/notemock/devices.jpg"
            className="w-full rounded-xl"
          /> */}
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default PortfolioProjectPage;
