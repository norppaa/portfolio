import { Container, Typography } from "@mui/material";
import "../styles/App.css";
import ProjectCard from "../components/projectCard";
import theme from "../styles/theme";
import image from "../pictures/OpenVAA.png";

function ProjectsPage() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <Typography
          variant="h4"
          fontFamily={theme.text?.primary?.font}
          sx={{ p: "20px" }}
        >
          Projects
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "1rem",
          }}
        >
          <ProjectCard
            imageSrc={image}
            title="title"
            text="kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa "
          />

          <ProjectCard
            imageSrc={image}
            title="title"
            text="kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa "
          />

          <ProjectCard
            imageSrc={image}
            title="title"
            text="kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa "
          />
        </Container>
      </Container>
    </div>
  );
}

export default ProjectsPage;
