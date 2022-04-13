import React, { useState } from "react";
import AwesomeSliderStyles from "../CSS/cg.css";
import { pictures } from "../data.js";
import AwesomeSlider from "react-awesome-slider";
import Navbar from "./Navbar";
import paper from "../images/paper.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import { CgCloseR } from "react-icons/cg";

const font = createTheme({
  typography: {
    fontFamily: ["Yuji Syuku", "serif"].join(","),
  },
});

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70vw", sm: "65vh", md: "60vw" },
  height: { xs: "40vh", sm: "43vh", md: "70vh" },
  backgroundColor: "rgba(0,0,0,0.6)",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
  cursor: "pointer",
};

const CG = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  return (
    <>
      <Navbar sx={{ position: "absolute" }} />
      <Box
        sx={{
          backgroundImage: `url(${paper})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          height: { sm: "160vh", md: "120vh" },
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
            <>
              <Grid item xs={6} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    maxWidth: 420,
                    maxHeight: 260,
                    m: "7vh 2vw",
                    boxShadow:
                      "-10px 0px 15px -7px #000000, 10px 0px 15px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
                    WebkitBoxShadow:
                      "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
                  }}
                  onClick={() => {
                    setModalData(item);
                    setOpen(true);
                  }}
                >
                  <CardMedia
                    component="img"
                    src={item.image}
                    sx={{ height: "100%" }}
                  />
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-end"
            >
              <CgCloseR
                onClick={() => setOpen(false)}
                style={{ fontSize: "33px", color: "white" }}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: "2vh" }}
            >
              <AwesomeSlider
                cssModule={AwesomeSliderStyles}
                selected={modalData.id - 1}
              >
                {pictures.map((item) => (
                  <div data-src={item.image} />
                ))}
              </AwesomeSlider>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default CG;
