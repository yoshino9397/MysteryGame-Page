import React from "react";
import { game, music, book, bonus } from "../data.js";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import paper from "../images/paper.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Yuji Syuku", "serif"].join(","),
  },
});

const Special = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#0084ff",
  };
  return (
    <>
      <Navbar sx={{ position: "absolute" }} />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: `url(${paper})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            height: { xs: "370vh", sm: "380vh", md: "200vh" },
          }}
        >
          <Typography
            variant="h2"
            color="white"
            sx={{
              textAlign: "center",
              textShadow: "2px 4px rgb(190, 0, 159)",
              backgroundColor: "rgb(0, 0, 0,0.4)",
              height: "10vh",
              p: "20px 0",
            }}
          >
            Special
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Card
              sx={{
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "72vw",
                m: "10vh 0",
                p: "4vw 7vh 6vh",
              }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="flex-start"
                width="100%"
              >
                <Grid item md={8}>
                  <Typography variant="h2" color="#be00be" align="center">
                    地下室の怪人
                  </Typography>
                  <Typography variant="h4" color="#be00be" align="center">
                    The Phantom
                  </Typography>
                  <Typography
                    color="white"
                    sx={{ fontSize: "28px", m: "4vh 0 5vh" }}
                  >
                    ▼Distribution contents
                  </Typography>
                  <Typography variant="h6" color="white">
                    Distribution Date : Summer in 2022
                    <br />
                    Theme : Pop-occult mystery in Taisho era
                    <br />
                    Genre : BLG of mysterious books and hallucinations
                    <br />
                    Rating:R18(Includes cruel and sexual depictions)
                    <br />
                    Full voice
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <CardMedia
                    component="img"
                    width={{ xs: "10vw", sm: "10vw", md: "30vw" }}
                    src="https://live.staticflickr.com/65535/51998047957_fe11255b71_h.jpg"
                    alt="package"
                    sx={{
                      m: {
                        xs: "5vh 0",
                        sm: "5vh 0",
                        md: "0 0 1vh ",
                        width: { xs: "10vw", sm: "10vw", md: "30vw" },
                      },
                    }}
                  />
                </Grid>
                <Grid item md={7}>
                  <Typography
                    color="white"
                    sx={{ fontSize: "28px", m: "1vh 0 3vh" }}
                  >
                    ▼Distribution form
                  </Typography>
                  <Typography
                    color="white"
                    sx={{ fontSize: "22px", mb: "3vh" }}
                  >
                    Comic Market in summer of 2023
                  </Typography>
                  <Typography variant="h5" color="white" sx={{ mb: "2vh" }}>
                    Game(Main Story)
                  </Typography>
                  {game.map((item) => (
                    <Link to={item.path} style={linkStyle}>
                      <Typography sx={{ fontSize: "20px" }} key={item.id}>
                        {item.site}
                      </Typography>
                    </Link>
                  ))}
                  <Typography variant="h5" color="white" sx={{ m: "2vh 0" }}>
                    Soundtrack
                  </Typography>
                  {music.map((item) => (
                    <Link to={item.path} style={linkStyle}>
                      <Typography sx={{ fontSize: "20px" }} key={item.id}>
                        {item.site}
                      </Typography>
                    </Link>
                  ))}
                  <Typography variant="h5" color="white" sx={{ m: "2vh 0" }}>
                    Supplementary reader
                  </Typography>
                  {book.map((item) => (
                    <Link to={item.path} style={linkStyle}>
                      <Typography sx={{ fontSize: "20px" }} key={item.id}>
                        {item.site}
                      </Typography>
                    </Link>
                  ))}
                </Grid>
                <Grid item md={5}>
                  <Typography color="white" sx={{ fontSize: "28px", m: "3vh" }}>
                    ▼Bonus
                  </Typography>
                  {bonus.map((item) => (
                    <Link to={item.path} style={linkStyle}>
                      <Typography variant="h5" key={item.id} sx={{ mb: "2vh" }}>
                        {item.site}
                      </Typography>
                    </Link>
                  ))}
                  <Typography
                    color="#be00be"
                    sx={{ fontSize: "28px", m: "6vh 0 2vh" }}
                  >
                    Planning and production
                  </Typography>
                  <Typography variant="h5" color="white">
                    Scenario/Original Illustrations /Background/Coloration
                    <br />
                    <br />
                    Yoshino
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Special;
