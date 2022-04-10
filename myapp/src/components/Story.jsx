import React from "react";
import { story } from "../data.js";
import Navbar from "./Navbar";
import paper from "../images/paper.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Yuji Syuku", "serif"].join(","),
  },
});

const Story = () => {
  return (
    <>
      <Navbar sx={{ position: "absolute" }} />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: `url(${paper})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            height: "170vh",
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
            Story
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
                width: "60vw",
                height: "130vh",
                m: "10vh 0",
                p: "3vw 7vh",
                overflow: "scroll",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h3" color="white">
                  In June 1918
                </Typography>
                <Typography variant="h3" color="#d40e99" sx={{ mt: "5vh" }}>
                  Jimbocho in the rainy season
                </Typography>
                {story.map((item) => (
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ m: "50px 0" }}
                    item={item}
                    key={item.id}
                  >
                    {item.desc}
                  </Typography>
                ))}
                <Typography
                  variant="h4"
                  color="#0084ff"
                  sx={{ m: "80px 0 50px" }}
                >
                  What is real,
                  <br /> what is a hallucination?
                </Typography>
                <Typography variant="h4" color="#d40e99" sx={{}}>
                  In this pop-occult mystery that surrounds
                  <br />
                  the deaths of his friends
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Story;
