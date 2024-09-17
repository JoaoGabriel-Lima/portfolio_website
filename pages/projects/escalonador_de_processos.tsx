import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const RastrosPerdidosPage = () => {
  return (
    <Layout title={"Escalonador de Processos"}>
      <ProjectPage
        date={"2024"}
        title={"Escalonador de Processos"}
        description={[
          "A process scheduling simulator designed with a preemptive feedback policy, using a 3-clock quantum and 4 ready queues. The system features four CPUs, four disks for memory access, and 32 GB of RAM, ensuring exclusive resource allocation per process. The simulator supports process creation, state transitions, resource allocation, and real-time logging for monitoring.",
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
            title: "My Group",
            linkTitle:
              "Rafael Amparo, Thales Abranches, Vinícius Mouzinho, Mauricio Pollis",
            link: "https://github.com/JoaoGabriel-Lima/escalonador/graphs/contributors",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/escalonador",
            linkTitle: "GitHub Link",
          },
          { title: "Plataform", linkTitle: "Desktop" },
          {
            title: "Stack",
            linkTitle: "Python, RichLib",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Source 3"
            src="/projects/escalonador_de_processos/3.gif"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            alt="Project Source 2"
            src="/projects/escalonador_de_processos/2.png"
            className="w-full rounded-xl min-w-[175px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default RastrosPerdidosPage;
