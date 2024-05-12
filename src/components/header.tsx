import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
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
  const [menu, setMenu] = useState(null);
  const handleClick = (e: any) => {
    setMenu(e.currentTarget);
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

          <IconButton onClick={handleClick}>
            <MenuIcon htmlColor="#f7f0d7"></MenuIcon>
          </IconButton>
        </Container>

        <Menu
          id="menu"
          open={open}
          anchorEl={menu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          classes={{ list: "list", paper: "paper-root", root: "root" }}
        >
          <MenuList
            sx={{
              width: "50vw",
              bgcolor: "#f7f0d7",
            }}
          >
            <MenuItem
              onClick={handleClick}
              sx={{ display: "flex", justifyContent: "right" }}
            >
              <CloseIcon fontSize="small" sx={{ position: "left" }} />
            </MenuItem>

            <Link to={"/"} onClick={handleClick}>
              <MenuItem onClick={handleClick} sx={{ textTransform: "none" }}>
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="body2"
                >
                  Me?
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/experience">
              <MenuItem onClick={handleClick} sx={{ textTransform: "none" }}>
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="body2"
                >
                  Experience?
                </Typography>
              </MenuItem>
            </Link>

            <Link to={"/projects"}>
              <MenuItem onClick={handleClick} sx={{ textTransform: "none" }}>
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="body2"
                >
                  Projects?
                </Typography>
              </MenuItem>
            </Link>

            <Link to={"/funnything"}>
              <MenuItem onClick={handleClick} sx={{ textTransform: "none" }}>
                <Typography
                  fontFamily={theme.text?.primary?.font}
                  variant="body2"
                >
                  Want to see a funny thing?
                </Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
