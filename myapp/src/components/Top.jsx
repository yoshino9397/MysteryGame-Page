import React from "react";
import { Link } from "react-router-dom";
import topImage from "../images/top.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Top = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  const imgStyle = {
    width: "450px",
  };
  return (
    <Box
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center">
        <Link to={"/home"} style={linkStyle}>
          <img src={topImage} alt="" style={imgStyle} />
        </Link>
      </Grid>
    </Box>
  );
};

export default Top;
