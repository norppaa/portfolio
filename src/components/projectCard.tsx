import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Container,
  CardActions,
} from "@mui/material";
import theme from "../styles/theme";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  text: string;
  link: string;
}

function ProjectCard({
  imageSrc,
  title,
  subtitle,
  text,
  link,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        bgcolor: "#f5ffe2",
        display: "flex",
        flexDirection: "column",
        p: "0rem",
        pt: "1rem",
        m: { xs: "0rem", sm: "1rem" },
        maxWidth: { xs: "100%", sm: "80%", lg: "40%" },
        minWidth: "200px",
        height: { sm: "16rem", md: "18rem" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (min-width: 600px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            "@media (min-width: 300px)": {
              paddingLeft: "0px",
              paddingRight: "16px",
            },
            minHeight: { sx: "0rem", md: "4rem" },
          }}
        >
          <Typography
            variant="h5"
            fontFamily={theme.text?.primary?.font}
            sx={{
              flexWrap: "wrap",
              flexGrow: 4,
              alignItems: "stretch",
              justifyContent: "flex-start",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            fontFamily={theme.text?.primary?.font}
            sx={{
              flexWrap: "wrap",
              flexGrow: 4,
              alignItems: "stretch",
              justifyContent: "flex-start",
            }}
          >
            {subtitle}
          </Typography>
        </Container>
      </Container>
      <CardContent>
        <Typography
          variant="body1"
          fontFamily={theme.text?.primary?.font}
          fontSize="0.85rem"
        >
          {text}
        </Typography>
      </CardContent>

      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexGrow: 1,
          alignItems: "flex-end",
          "@media (min-width: 600px)": {
            paddingLeft: "1rem", // Override padding-left
            paddingRight: "1rem", // Override padding-right
          },
        }}
      >
        <CardActions sx={{ px: "0rem" }}>
          <a href={link} aria-label="github">
            Learn more
          </a>
        </CardActions>
      </Container>
    </Card>
  );
}

export default ProjectCard;
