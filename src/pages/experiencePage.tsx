import { Container, Typography } from "@mui/material";
import Header from "../components/header";
import theme from "../styles/theme";
import ProjectCard from "../components/projectCard";

function ExperiencePage() {
  return (
    <div>
      <Header />
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
          Experience
        </Typography>

        <Typography
          variant="body2"
          fontFamily={theme.text?.primary?.font}
          sx={{ p: "20px", textAlign: "center" }}
        >
          Olen toisen vuoden Tietotekniikan opiskelija Aallosta ja etsin
          kesätyöpaikkaa IT-alalta. Olen jo pitkään ollut kiinnostunut
          koodaushommista, ja tavoitteeni on päästä kehittämään full-stack- tai
          frontend-ohjelmistoa. Pidän paljon ongelmanratkaisusta ja ajattelen
          loogisesti, ja softahommat on mun mielestä kivoja, sillä ne vaatii
          näitä taitoja paljon. Tämän lisäksi olen hyvä ryhmätyöskentelijä ja
          uskallan kysyä kysymyksiä, jos jokin asia on jäänyt mulle epäselväksi.
          Mulla on myös erittäin korkea motivaatio oppia uutta, sillä havittelen
          uraa Full Stack hommista myöhemmin.
        </Typography>
        <Typography
          variant="body2"
          fontFamily={theme.text?.primary?.font}
          sx={{ p: "20px", textAlign: "center" }}
        >
          Contact me. Contact me. Contact me. Contact me.Contact me. Contact me.
          Contact me.Contact me. Contact me. Contact me. Contact me.
        </Typography>

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
        >
          <ProjectCard
            imageSrc="OpenVAA.png"
            title="work"
            text="kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa "
          />

          <ProjectCard
            imageSrc="OpenVAA.png"
            title="work"
            text="kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa "
          />

          <ProjectCard
            imageSrc="OpenVAA.png"
            title="work"
            text="kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa kontsa "
          />
        </Container>
      </Container>
    </div>
  );
}

export default ExperiencePage;
