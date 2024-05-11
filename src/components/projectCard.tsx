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
      }}
    >
      <Avatar alt="OpenVAA" src={imageSrc} sx={{ width: 40, height: 40 }} />
      <CardContent>
        <Typography
          variant="h4"
          fontFamily={theme.text?.primary?.font}
          sx={{ textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
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
