import React, { useState, useRef } from "react";
import "../CSS/home.css";
import { Sling as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import homeImg from "../images/retroHome.jpg";
import storyImg from "../images/story.png";
import charaImg from "../images/chara.png";
import cgsImg from "../images/cgs.png";
import supportImg from "../images/support.png";
import specialImg from "../images/special.png";
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

const pages = [
  { page: "Home", path: "/home" },
  { page: "Story", path: "/home" },
  { page: "Character", path: "/home" },
  { page: "CG", path: "/home" },
  { page: "Support", path: "/home" },
  { page: "Special", path: "/home" },
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
      <Grid
        container
        backgroundColor="black"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ display: { sm: "flex", md: "none" } }}
      >
        <ThemeProvider theme={japanese}>
          <Typography
            variant="h2"
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
      </Grid>

      <Box
        sx={{
          backgroundColor: "black",
          backgroundImage: `url(${homeImg})`,
          backgroundSize: { xs: "contain", sm: "cover", md: "contain" },
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
            sx={{ margin: "40px", position: "absolute", zIndex: "100" }}
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
                  <li key={i}>
                    <Link to={page.path} style={linkStyle}>
                      {page.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            margin: "20vh 3vw 0 0 ",
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
    </>
  );
};

export default Home;
