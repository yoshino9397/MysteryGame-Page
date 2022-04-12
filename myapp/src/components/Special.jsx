import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import paper from "../images/paper.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Special = () => {
  return (
    <>
      <Navbar sx={{ position: "absolute" }} />
      <Box
        sx={{
          backgroundImage: `url(${paper})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          height: { xs: "250vh", sm: "230vh", md: "200vh" },
        }}
      ></Box>
    </>
  );
};

export default Special;
