import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const YSMARTProjectPage = () => {
  return (
    <Layout title={"Telessaúde HUAP"}>
      <ProjectPage
        date={"2023-PRESENT"}
        title={"Telessaúde HUAP"}
        description={[
          `The Telessaúde project, a collaborative initiative between Federal Fluminense University (UFF) and Antônio Pedro University Hospital (HUAP), merges technology and healthcare to enhance accessibility, education, and the quality of medical services.`,
          "Mission: Our mission is to strengthen the SUS (Unified Health System), support healthcare professionals, assist municipal networks, and streamline access to consultations and information at HUAP.",
          "Objectives: Utilizing a multidisciplinary team of specialists, we aim to develop innovative solutions that advance health and information, making a transformative impact on lives.",
          "As a member of the Infrastructure and IT team, led by Professor Natalia Fernandes, I played a key role in the redevelopment of the project’s website. The new version was built using WordPress, with a focus on creating a complex and highly customized design from scratch. This involved extensive use of styling techniques to achieve a sophisticated and functional layout.",
          "I had direct access to the development environment hosted on the university’s servers, which facilitated a seamless integration and deployment process. The project highlights my expertise in both frontend development and technical coordination, ensuring that the website met the high standards of functionality and aesthetics required for the Telessaúde initiative.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Website",
            link: "https://telessaude.uff.br/",
          },
          {
            title: "Project supervisor",
            link: "http://lattes.cnpq.br/4205779497458915",
            linkTitle: "Prof. Natalia Fernandes",
          },
          {
            title: "Private",
            linkTitle: "Source Link is private (Running on UFF servers)",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle: "Wordpress, Elements",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Source 1"
            src="/projects/telessaude/0.png"
            className="w-full rounded-xl min-h-[150px]"
          />
          <img
            alt="Project Source 1"
            src="/projects/telessaude/1.png"
            className="w-full rounded-xl min-h-[150px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default YSMARTProjectPage;
