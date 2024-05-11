import { Button, Container, Typography } from "@mui/material";
import "../styles/App.css";
import { East } from "@mui/icons-material";
import theme from "../styles/theme";
import Header from "../components/header";

function HeroPage() {
  return (
    <div>
      <Header />
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
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
              endIcon={<East fontSize="large" />}
            >
              <Typography fontFamily={theme.text?.primary?.font} fontSize={12}>
                Read more about me
              </Typography>
            </Button>
            <Button
              variant="text"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
              endIcon={<East fontSize="large" />}
            >
              <Typography fontFamily={theme.text?.primary?.font} fontSize={12}>
                Read about my projects
              </Typography>
            </Button>
            <Button
              variant="text"
              color="inherit"
              size="small"
              sx={{ textTransform: "none" }}
              endIcon={<East fontSize="large" />}
            >
              <Typography fontFamily={theme.text?.primary?.font} fontSize={12}>
                Read about my experience
              </Typography>
            </Button>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default HeroPage;
