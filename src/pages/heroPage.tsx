import {
  Container,
  Typography,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import "../styles/App.css";
import theme from "../styles/theme";
import ProjectCard from "../components/projectCard";

function HeroPage() {
  return (
    <div>
      <Container maxWidth="lg">
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "center",
              maxWidth: { xs: "100%", sm: "85%" },
              mt: { xs: "4rem", sm: "8rem" },
            }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexShrink: 4,
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/pictures/Naamakuva.jpg"
                sx={{ width: 220, height: 220, justifyContent: "center" }}
              />
            </Container>

            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" }, // Center text on mobile
                pb: { xs: "2rem", md: "0rem" },
                px: { xs: "0rem", md: "2.7rem" },
                flexGrow: 4,
              }}
            >
              <Typography
                variant="h3"
                fontFamily="inherit"
                sx={{ pb: "0.5rem" }}
              >
                Hi! I’m Noora Puhakka,
              </Typography>

              <Typography variant="h5" fontFamily="inherit">
                enthusiastic software developer and designer.
              </Typography>
            </Container>
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                // m: "1rem",
                mt: "3rem",
                backgroundColor: "#f5ffe2",
                maxWidth: { xs: "100%", sm: "80%" },
                mx: "0rem",
                p: "0rem",
              }}
            >
              <CardContent sx={{ alignItems: "center" }}>
                <Typography
                  variant="h6"
                  fontFamily={theme.text?.primary?.font}
                  fontSize="0.85rem"
                >
                  I have a passion for creating beautiful and functional
                  software, and would love to challenge my self in full stack
                  development. My projects have thought me a wide range of
                  technologies and techniques, and I am always eager to learn
                  more. I have a strong experience in project management and
                  teamleading from my volunteer work in Tietokilta in Aalto.
                </Typography>
              </CardContent>
            </Card>
          </Container>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: "0rem",
              p: "0rem",
            }}
          >
            <Typography
              variant="h4"
              fontFamily="inherit"
              sx={{
                mt: "3rem",
              }}
            >
              My Experience
            </Typography>

            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                mt: "2rem",
                gap: "1rem",
              }}
            >
              <ProjectCard
                title="OpenVAA,"
                subtitle="Voting Advice Application"
                text="Contributed to an open-source voting advice application over the course of half a year as a part of a university course and continued with the project during summer as a paid programmer. The project is organized by OpenVAA. Main technologies used are Svelte, Strapi and Docker. "
                link="https://github.com/OpenVAA/voting-advice-application"
              ></ProjectCard>

              <ProjectCard
                title="Portfolio"
                text="Built this portfolio website from scratch using React, typescript and Material-UI. The website is hosted on Vercel and the source code is available on GitHub."
                link="https://github.com/norppaa/portfolio"
              ></ProjectCard>

              <ProjectCard
                title="Blog Review App"
                text="Developed a full stack web -application where users can sign in, make reviews, and like other reviews. I Implemented the frontend with React and JavaScript and the backend using JavaScript, connecting it to a MongoDB database.
I also Containerized the application using Docker."
                link="https://github.com/norppaa/blogReviewApp"
              ></ProjectCard>

              <ProjectCard
                title="Course review system"
                text="The application is still in development. I am building a full stack web application where users can review courses and like other reviews. The frontend is built with Svelte and the backend with Deno and Javascript, and connected it to a PostgreSQL database."
                link="https://github.com/norppaa/Course-review"
              ></ProjectCard>
            </Container>
          </Container>

          <Container
            sx={{ display: "flex", flexDirection: "column", pt: "1rem" }}
          >
            <Typography
              variant="body1"
              fontFamily={theme.text?.primary?.font}
              sx={{ paddintTop: "40px", textAlign: "center" }}
            >
              Contact me: 0452772060 • noora.puhakka02@gmail.com
            </Typography>

            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                pt: "0.5rem",
                gap: "0.5rem",
              }}
            >
              <a href="https://github.com/norppaa" aria-label="github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#faf6ea"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/noora-puhakka-0332a3270/"
                aria-label="linkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#faf6ea"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </a>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default HeroPage;
