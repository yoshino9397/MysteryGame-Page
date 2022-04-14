import React from "react";
import { people } from "../data.js";
import { Link, useLocation } from "react-router-dom";
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

  const linkStyle = {
    textDecoration: "none",
    color: "white",
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
            height: { xs: "170vh", sm: "160vh", md: "120vh" },
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            height="10vh"
            backgroundColor="rgb(0, 0, 0,0.4)"
          >
            {people.map((item) => (
              <Link to={`/person/${item.id}`} style={linkStyle}>
                <Grid
                  item
                  sx={{
                    backgroundColor: "#be00be",
                    clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0% 100%)",
                    padding: {
                      xs: "1.3vh 3.3vw",
                      sm: "1.3vh 4vw",
                      md: "1.3vh 4vw",
                    },
                    margin: {
                      xs: "2vh -5px",
                      sm: "2vh -0.5vw",
                      md: "2vh 0",
                    },
                    border: "2px solid black",
                  }}
                >
                  {item.name}
                </Grid>
              </Link>
            ))}
          </Grid>
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
                  xs: "75vw",
                  sm: "75vw",
                  md: "65vw",
                },
                maxHeight: {
                  xs: "150vh",
                  sm: "120vh",
                  md: "85vh",
                },
                m: "6vh 0",
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
                        xs: "40vh",
                        sm: "50vh",
                        md: "50vh",
                      },
                      width: {
                        xs: "60vw",
                        sm: "50vw",
                        md: "20vw",
                      },
                      m: {
                        xs: "3vh 0",
                        sm: "3vh 0",
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
                    sx={{
                      m: "3vh 0",
                    }}
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
