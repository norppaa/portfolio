import { Button, Container, Typography } from "@mui/material";
import "../styles/App.css";
import { East } from "@mui/icons-material";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import Eye from "../components/eye";
import useWindowWidth from "../util/hooks";

function HeroPage() {
  const width = useWindowWidth();

  return (
    <div>
      <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
        <Container maxWidth="md">
          <Eye x={width / 2 - width / 4} y={140} eyeClassName="pupil"></Eye>
          <Eye x={width / 2 + width / 3.7} y={650} eyeClassName="pupil"></Eye>

          <Typography
            variant="h3"
            fontFamily="inherit"
            sx={{
              textAlign: "center",
              pt: "5rem",
              pb: "3rem",
              mt: "5rem",
              mb: 0,
            }}
          >
            Hi! I’m Noora Puhakka, fullstack web developer and designer.
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 0,
            }}
          >
            <Link
              to="/experience"
              style={{
                color: "#f7f0d7",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                color="inherit"
                size="medium"
                endIcon={<East fontSize="large" />}
              >
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="body1"
                  sx={{ textTransform: "none" }}
                >
                  Read about my experience
                </Typography>
              </Button>
            </Link>

            <Link
              to="/projects"
              style={{
                color: "#f7f0d7",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                color="inherit"
                size="medium"
                endIcon={<East />}
              >
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="body1"
                  sx={{ textTransform: "none" }}
                >
                  Read about my projects
                </Typography>
              </Button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default HeroPage;
