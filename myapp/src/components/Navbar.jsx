import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        sx={{ backgroundColor: "black", pr: "10vw" }}
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
    </ThemeProvider>
  );
};

export default Navbar;
