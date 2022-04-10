import React, { useState, useRef } from "react";
import "../CSS/home.css";
import { Sling as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import homeImg from "../images/home.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const japanese = createTheme({
  typography: {
    fontFamily: ["New Tegomin", "serif"].join(","),
  },
});
const font = createTheme({
  typography: {
    fontFamily: ["Gentium Book Basic", "serif"].join(","),
  },
});

const responsive = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1210,
      lg: 1300,
    },
  },
});
const pages = [
  { page: "Home", path: "/home" },
  { page: "Story", path: "/story" },
  { page: "Character", path: "/character" },
  { page: "CG", path: "/cgs" },
  { page: "Support", path: "/support" },
  { page: "Special", path: "/special" },
];

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const modeRef = useRef();

  const handleToggle = () => {
    modeRef.current.classList.toggle("open-menu");
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <ThemeProvider theme={responsive}>
        <Grid
          container
          backgroundColor="black"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ display: { sm: "flex", md: "none" }, p: "3vh 2vw" }}
        >
          <ThemeProvider theme={japanese}>
            <Typography
              variant="h2"
              color="white"
              sx={{
                padding: "5px 20px",
                textShadow: "2px 4px rgb(190, 0, 159)",
              }}
            >
              地下室の怪人
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={font}>
            <Typography
              variant="h3"
              color="white"
              sx={{
                padding: "10px 20px",
                textShadow: "2px 4px rgb(190, 0, 159)",
              }}
            >
              The Phantom
            </Typography>
          </ThemeProvider>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
            sx={{
              zIndex: "100",
              width: "90vw",
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <Grid item sx={{ pb: "-3vh" }}>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="white"
                easing="ease-in"
                onToggle={(toggled) => {
                  handleToggle(toggled);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "black",
            backgroundImage: `url(${homeImg})`,
            backgroundSize: { xs: "cover", sm: "cover", md: "contain" },
            backgroundRepeat: "no-repeat",
            height: "100vh",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Grid
              item
              sx={{
                margin: "40px",
                position: "absolute",
                zIndex: "100",
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="white"
                easing="ease-in"
                onToggle={(toggled) => {
                  handleToggle(toggled);
                }}
              />
            </Grid>
            <Grid item sx={{ position: "absolute", zIndex: "1" }}>
              <nav ref={modeRef}>
                <ul>
                  {pages.map((page, i) => (
                    <Link to={page.path} style={linkStyle}>
                      <li key={i}>{page.page}</li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              mt: "35vh",
              width: "95vw",
              flexDirection: "column",
            }}
          >
            <ThemeProvider theme={japanese}>
              <Typography
                variant="h1"
                color="white"
                sx={{
                  padding: "10px 20px",
                  textShadow: "2px 4px rgb(190, 0, 159)",
                }}
              >
                地下室の怪人
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={font}>
              <Typography
                variant="h2"
                color="white"
                sx={{
                  padding: "10px 20px",
                  textShadow: "2px 4px rgb(190, 0, 159)",
                  textAlign: "center",
                }}
              >
                The Phantom
              </Typography>
            </ThemeProvider>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
