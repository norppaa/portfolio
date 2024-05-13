import { Avatar, Card, CardContent, Typography } from "@mui/material";
import theme from "../styles/theme";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  text: string;
}

function ProjectCard({ imageSrc, title, text }: ProjectCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "#5A734A",
        color: "#f7f0d7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "20px",
        maxWidth: "70vw",
      }}
    >
      <Avatar
        alt="OpenVAA"
        src={imageSrc}
        sx={{ width: "4rem", height: "4rem" }}
      />
      <CardContent>
        <Typography
          variant="h5"
          fontFamily={theme.text?.primary?.font}
          sx={{
            textAlign: "center",
            px: "1rem",

            flexWrap: "wrap",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontFamily={theme.text?.primary?.font}
          sx={{ textAlign: "center" }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
