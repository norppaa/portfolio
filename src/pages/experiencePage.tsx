import { Container, Typography } from "@mui/material";
import theme from "../styles/theme";

function ExperiencePage() {
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
          sx={{ pt: "50px" }}
        >
          Experience
        </Typography>

        <Typography
          variant="body1"
          fontFamily={theme.text?.primary?.font}
          sx={{ p: "20px", textAlign: "center" }}
        >
          Olen toisen vuoden Tietotekniikan opiskelija Aallosta. Olen jo pitkään
          ollut kiinnostunut koodaushommista, ja tavoitteeni on päästä
          kehittämään full-stack- tai frontend-ohjelmistoa. Pidän paljon
          ongelmanratkaisusta ja ajattelen loogisesti, ja softahommat on mun
          mielestä kivoja, sillä ne vaatii näitä taitoja paljon. Tämän lisäksi
          olen hyvä ryhmätyöskentelijä ja uskallan kysyä kysymyksiä, jos jokin
          asia on jäänyt mulle epäselväksi. Mulla on myös erittäin korkea
          motivaatio oppia uutta, sillä havittelen uraa Full Stack hommista
          myöhemmin.
        </Typography>
        <Typography
          variant="body1"
          fontFamily={theme.text?.primary?.font}
          sx={{ p: "20px", textAlign: "center" }}
        >
          0452772060 noora.puhakka02@gmail.com
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="https://github.com/norppaa" aria-label="github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f7f0d7"
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
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f7f0d7"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
        </Container>

        <Typography
          variant="h4"
          fontFamily={theme.text?.primary?.font}
          sx={{ p: "20px" }}
        >
          Previous work
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "1rem",
          }}
        ></Container>
      </Container>
    </div>
  );
}

export default ExperiencePage;
