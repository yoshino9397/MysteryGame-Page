import React from "react";
import { pictures } from "../data.js";
import Navbar from "./Navbar";
import paper from "../images/paper.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const font = createTheme({
  typography: {
    fontFamily: ["Yuji Syuku", "serif"].join(","),
  },
});
const CG = () => {
  const imgStyle = {
    width: "25vw",
  };

  return (
    <>
      <Navbar sx={{ position: "absolute" }} />
      <Box
        sx={{
          backgroundImage: `url(${paper})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          height: "120vh",
        }}
      >
        <ThemeProvider theme={font}>
          <Typography
            variant="h2"
            color="white"
            sx={{
              textAlign: "center",
              textShadow: "2px 4px rgb(190, 0, 159)",
              backgroundColor: "rgb(0, 0, 0,0.5)",
              height: "10vh",
              p: "20px 0",
            }}
          >
            Gallery
          </Typography>
        </ThemeProvider>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100vw"
        >
          {pictures.map((item) => (
            <Grid item xs={6} sm={6} md={4} key={item.id}>
              <Card sx={{ maxWidth: 400, m: "7vh 3vw" }}>
                <CardMedia component="img" src={item.image} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CG;
