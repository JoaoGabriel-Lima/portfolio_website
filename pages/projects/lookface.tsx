import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const FaceLookProjectPage = () => {
  return (
    <Layout title={"SingWatch"}>
      <ProjectPage
        date={"2022-PRESENT"}
        title={"FaceLook"}
        description={[
          "A face recognition website that uses the power of TensorFlow.js and WebAssembly.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Unfinished",
          },
          {
            title: "Website",
            link: "https://look-face.vercel.app/",
          },
          {
            title: "Open-source",
            link: "https://github.com/JoaoGabriel-Lima/LookFace",
            linkTitle: "GitHub Link",
          },
          { title: "Plataform", linkTitle: "Browser" },
          {
            title: "Stack",
            linkTitle:
              "Next.js, TailwindCSS, Styled-Components, Tensorflow.js, Webcam.js, Face-API",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            src="/projects/lookface/lookface1.png"
            className="w-full rounded-xl min-w-[175px]"
          />
          <img
            src="/projects/lookface/lookface2.png"
            className="w-full rounded-xl min-w-[175px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default FaceLookProjectPage;
