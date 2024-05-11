import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import theme from "../styles/theme";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        width: "100vw",
        height: "5vh",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          height: "5vh",
          minHeight: "0px",
          display: "flex",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontFamily="inherit" fontSize={12}>
            Noora Puhakka
          </Typography>

          <IconButton onClick={handleMenu}>
            <MenuIcon htmlColor="#f7f0d7"></MenuIcon>
          </IconButton>
        </Container>

        <Menu
          id="menu"
          open={open}
          classes={{
            paper: "tapan",
          }}
          sx={{
            top: "10px",
            left: "42vw",
            height: "95vh",
            bgColor: "#f7f0d7",
            maxHeight: "none",
          }}
        >
          <MenuItem
            onClick={handleMenu}
            sx={{ display: "flex", justifyContent: "right" }}
          >
            <CloseIcon fontSize="small" sx={{ position: "left" }} />
          </MenuItem>

          <Link to={"/"}>
            <MenuItem onClick={handleMenu} sx={{ textTransform: "none" }}>
              <Typography fontFamily={theme.text?.primary?.font} fontSize={12}>
                Me?
              </Typography>
            </MenuItem>
          </Link>

          <Link to={"/projects"}>
            <MenuItem onClick={handleMenu} sx={{ textTransform: "none" }}>
              <Typography fontFamily={theme.text?.primary?.font} fontSize={12}>
                Projects?
              </Typography>
            </MenuItem>
          </Link>

          <Link to="/projects">
            <MenuItem onClick={handleMenu} sx={{ textTransform: "none" }}>
              <Typography fontFamily={theme.text?.primary?.font} fontSize={12}>
                Experience?
              </Typography>
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
