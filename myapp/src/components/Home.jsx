import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import homeImg from "../images/home.jpg";
import storyImg from "../images/story.png";
import charaImg from "../images/chara.png";
import cgsImg from "../images/cgs.png";
import supportImg from "../images/support.png";
import specialImg from "../images/special.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const Home = () => {
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
          backgroundSize: "cover",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{ display: { sm: "none", md: "flex" } }}
        >
          <ThemeProvider theme={japanese}>
            <Typography
              variant="h1"
              color="white"
              backgroundColor="black"
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
              backgroundColor="black"
              sx={{
                padding: "10px 20px",
                textShadow: "2px 4px rgb(190, 0, 159)",
              }}
            >
              The Phantom
            </Typography>
          </ThemeProvider>
        </Grid>
        <ThemeProvider theme={font}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ mt: "50px", display: { sm: "none", md: "flex" } }}
          >
            <Typography
              variant="h4"
              color="black"
              sx={{
                padding: "25px 50px",
                backgroundImage: `url(${storyImg})`,
                backgroundSize: "cover",
                cursor: "pointer",
                mb: "8px",
                mr: "150px",
                ":hover": {
                  color: "red",
                },
              }}
            >
              Story
            </Typography>
            <Typography
              color="#681714"
              sx={{
                fontSize: "30px",
                padding: "27px 30px",
                backgroundImage: `url(${charaImg})`,
                backgroundSize: "cover",
                mb: "8px",
                mr: "138px",
                cursor: "pointer",
                ":hover": {
                  color: "#38603A",
                },
              }}
            >
              Character
            </Typography>
            <Typography
              variant="h4"
              color="#032e42"
              sx={{
                padding: "20px 55px",
                backgroundImage: `url(${cgsImg})`,
                backgroundSize: "cover",
                cursor: "pointer",
                mb: "8px",
                mr: "163px",
                ":hover": {
                  color: "white",
                },
              }}
            >
              CGs
            </Typography>
            <Typography
              color="#68417f"
              sx={{
                fontSize: "31px",
                padding: "26px 25px",
                backgroundImage: `url(${supportImg})`,
                backgroundSize: "cover",
                cursor: "pointer",
                mb: "8px",
                mr: "167px",
                ":hover": {
                  color: "#689D6D",
                },
              }}
            >
              Support
            </Typography>
            <Typography
              color="#21351F"
              sx={{
                fontSize: "30px",
                padding: "25px 27px",
                backgroundImage: `url(${specialImg})`,
                backgroundSize: "cover",
                cursor: "pointer",
                mb: "8px",
                mr: "170px",
                ":hover": {
                  color: "#fd56dc",
                },
              }}
            >
              Special
            </Typography>
          </Grid>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Home;
