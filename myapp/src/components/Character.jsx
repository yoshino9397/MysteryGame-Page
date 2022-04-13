import React, { useState } from "react";
import { characters } from "../data.js";
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
const Character = () => {
  const [data, setData] = useState("");
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
            height: { xs: "170vh", sm: "160vh", md: "110vh" },
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
            Character
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
                width: "86vw",
                m: "10vh 0",
                p: "4vw 7vh 6vh",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                {characters.map((item) => (
                  <Grid item xs={4} sm={4} md={2} key={item.id}>
                    <CardMedia
                      component="img"
                      src={item.image}
                      alt="character"
                      sx={{
                        height: {
                          xs: "58vh",
                          sm: "55vh",
                          md: "55vh",
                        },
                        width: {
                          xs: "30vw",
                          sm: "25vw",
                          md: "13vw",
                        },
                        m: {
                          xs: "0 0 3vh 0",
                          sm: "0 0 3vh 0",
                          md: 0,
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setData(item);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Character;
