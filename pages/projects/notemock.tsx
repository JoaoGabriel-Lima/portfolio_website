import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const NotemockProjectPage = () => {
  return (
    <Layout title={"Notemock"}>
      <ProjectPage
        date={"2020-PRESENT"}
        title={"Notemock"}
        description={[
          "A to-do list website made with Next.js focused on students and developers, offering better organization and customization options.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Unfinished",
          },
          {
            title: "Website",
            link: "https://notemock-website.vercel.app/",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/notemock_website",
            linkTitle: "GitHub Link",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle: "NodeJS, Next.js, MongoDB, TailwindCSS, Framer-Motion",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            src="/projects/notemock/tablet.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            src="/projects/notemock/devices.jpg"
            className="w-full rounded-xl min-h-[120px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default NotemockProjectPage;
