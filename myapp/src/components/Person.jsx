import React from "react";
import { people } from "../data.js";
import { useLocation } from "react-router-dom";
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

const Person = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <>
      <Navbar sx={{ position: "absolute" }} />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: `url(${paper})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            height: { xs: "170vh", sm: "160vh", md: "110vh" },
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Card
              sx={{
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: {
                  xs: "58vw",
                  sm: "55vw",
                  md: "65vw",
                },
                maxHeight: {
                  xs: "58vh",
                  sm: "55vh",
                  md: "75vh",
                },
                m: "10vh 0",
                p: "4vw 7vh ",
              }}
            >
              <Grid
                container
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <Grid item md={4}>
                  <CardMedia
                    component="img"
                    src={people[id - 1].image}
                    alt="character"
                    sx={{
                      height: {
                        xs: "58vh",
                        sm: "55vh",
                        md: "50vh",
                      },
                      width: {
                        xs: "30vw",
                        sm: "25vw",
                        md: "19vw",
                      },
                      m: {
                        xs: "0 0 3vh 0",
                        sm: "0 0 3vh 0",
                        md: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography variant="h3" color="white" align="center">
                    {people[id - 1].name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="white"
                    align="center"
                    sx={{ mt: "3vh" }}
                  >
                    {people[id - 1].desc}
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

export default Person;
