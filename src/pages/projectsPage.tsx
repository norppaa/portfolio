import { Container, Typography } from "@mui/material";
import "../styles/App.css";

import theme from "../styles/theme";

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
          variant="body1"
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
            margin: "0rem",
            padding: "0rem",
          }}
        ></Container>
      </Container>
    </div>
  );
}

export default ProjectsPage;
