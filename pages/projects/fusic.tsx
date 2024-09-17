import Layout from "../../components/layouts/page";
import ProjectPage from "../../components/projects/projectPage";

const YSMARTProjectPage = () => {
  return (
    <Layout title={"Fusic Bot"}>
      <ProjectPage
        date={"2023"}
        title={"Fusic Bot"}
        description={[
          `The Fusic project is a music bot designed for the Fusen™ community on Discord, a vibrant space dedicated to creativity and design. This community brings together a diverse and talented group of artists, designers, editors, social media experts, and other creative professionals.`,
          "The Fusic bot was meticulously crafted to enhance the community’s engagement and entertainment experience. At its core, the bot integrates FFMPEG, a powerful multimedia framework, to handle audio processing tasks such as streaming, transcoding, and format conversion. This ensures high-quality audio playback and a seamless listening experience for users.",
          "FFMPEG Integration: Implementing FFMPEG was crucial for providing robust audio functionalities. The bot uses FFMPEG to manage complex audio tasks, including live streaming and playback of high-fidelity sound. This integration allows for a wide range of audio formats and ensures that the bot can handle diverse music requests and playback scenarios.",
          "AWS Deployment Pipeline: A significant aspect of the Fusic project was developing a streamlined deployment pipeline using AWS (Amazon Web Services). This pipeline was designed to automate the deployment process, ensuring that updates and changes could be rolled out efficiently and reliably. The use of AWS services provided scalable infrastructure and high availability, which are essential for handling the dynamic demands of a live Discord server.",
          "During the development phase, I focused on creating a user-friendly interface and ensuring the bot’s reliability and performance. The bot was built with a custom backend that handles user commands, processes audio streams, and interacts with the Discord API to provide real-time responses. The deployment pipeline on AWS included setting up CI/CD (Continuous Integration and Continuous Deployment) practices, which facilitated smooth updates and maintenance.",
          "The Fusic bot not only enhances the auditory experience for the Fusen™ community but also integrates seamlessly with the server’s creative and design-focused environment. The project highlights my ability to combine advanced technical skills with creative problem-solving to deliver a sophisticated and functional tool for community engagement.",
        ]}
        links={[
          {
            title: "Status",
            linkTitle: "Finished",
          },
          {
            title: "Open-source",
            linkTitle: "Github",
            link: "https://github.com/JoaoGabriel-Lima/Fusic/",
          },
          { title: "Plataform", linkTitle: "Discord Bot" },
          {
            title: "Stack",
            linkTitle: "Javascript, FFMPEG, Docker, CI/CD, AWS",
          },
        ]}
      >
        <div className="w-full flex mt-1 flex-col gap-y-4">
          <img
            alt="Project Source 1"
            src="/thumbs/fusic.jpg"
            className="w-full rounded-xl min-h-[150px]"
          />
        </div>
      </ProjectPage>
    </Layout>
  );
};

export default YSMARTProjectPage;
