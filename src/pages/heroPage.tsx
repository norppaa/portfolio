import { Button, Container, Typography } from "@mui/material";
import "../styles/App.css";
import { East } from "@mui/icons-material";
import theme from "../styles/theme";
import Header from "../components/header";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <div>
      <Container maxWidth="lg">
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            fontFamily="inherit"
            sx={{
              textAlign: "center",
              py: 5,
              mt: 15,
              mb: 5,
            }}
          >
            Hi! I’m Noora Puhakka, fullstack web developer and designer.
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
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
                size="small"
                endIcon={<East fontSize="large" />}
              >
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="button"
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
                size="small"
                endIcon={<East />}
              >
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="button"
                  sx={{ textTransform: "none" }}
                >
                  Read about my projects
                </Typography>
              </Button>
            </Link>

            <Link
              to="/funnything"
              style={{
                color: "#f7f0d7",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                color="inherit"
                size="small"
                endIcon={<East />}
              >
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="button"
                  sx={{ textTransform: "none" }}
                >
                  Want to see a funny thing?
                </Typography>
              </Button>
            </Link>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default HeroPage;
