import React, { useState } from "react";
import "../App.css";
import { CgMenuCake } from "react-icons/cg";
import kaeru from "../images/kaeruIcon.png";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const menu = [
  { page: "Home", path: "/" },
  { page: "Story", path: "/story" },
  { page: "Character", path: "/character" },
  { page: "CG", path: "/cgs" },
  { page: "Support", path: "/support" },
  { page: "Special", path: "/special" },
];

const theme = createTheme({
  typography: {
    fontFamily: ["Gentium Book Basic", "serif"].join(","),
  },
});
const font = createTheme({
  typography: {
    fontFamily: ["Nanum Brush Script", "cursive"].join(","),
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const linkMdStyle = {
    textDecoration: "none",
    color: "black",
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        sx={{
          backgroundColor: "black",
          pr: "10vw",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
        }}
      >
        {menu.map((item, t) => (
          <Link to={item.path} style={linkStyle} key={t}>
            <Grid
              item
              sx={{
                padding: "18px 28px",
                transition: ".3s",
                backgroundColor: "black",
                ":hover": {
                  backgroundColor: "#be00be",
                  color: "black",
                },
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>{item.page}</Typography>
            </Grid>
          </Link>
        ))}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        height="100px"
        sx={{
          backgroundColor: "black",
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
        }}
      >
        <Link to="/" style={linkStyle}>
          <Grid
            item
            component="img"
            src={kaeru}
            sx={{
              width: {
                xs: "63px",
                sm: "70px",
              },
              height: {
                xs: "72px",
                sm: "80px",
              },
              mr: {
                xs: "3vw",
                sm: "4vw",
              },
            }}
          />
        </Link>
        <Grid item>
          <Link to="/" style={linkStyle}>
            <Typography
              variant="h3"
              color="white"
              sx={{ textShadow: "2px 4px rgb(190, 0, 159)" }}
            >
              The Phantom
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <IconButton onClick={handleMenu} sx={{ ml: "4vw" }}>
            <CgMenuCake color="white" fontSize="7vh" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {menu.map((item) => (
              <Link to={item.path} style={linkMdStyle}>
                <MenuItem key={item} onClick={handleClose}>
                  <ThemeProvider theme={font}>
                    <Typography textAlign="center" variant="h4">
                      {item.page}
                    </Typography>
                  </ThemeProvider>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Navbar;
