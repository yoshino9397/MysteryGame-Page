import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import paper from "../images/paper.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Yuji Syuku", "serif"].join(","),
  },
});

const Support = () => {
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
            height: { xs: "250vh", sm: "230vh", md: "210vh" },
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
            Support
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
                m: "10vh 0",
                p: "3vw 7vh",
              }}
            >
              <CardContent sx={{ textAlign: "center", alignItems: "center" }}>
                <Typography variant="h4" color="#be00be">
                  ▶︎ Support
                </Typography>
                <Typography variant="h6" color="white" sx={{ mt: "3vh" }}>
                  If you get stuck in the progress of the game (problem),
                  <br />
                  Please refer to the{" "}
                  <Link to={"/"} style={linkStyle}>
                    detailed support page
                  </Link>
                  . <br /> If the problem is not resolved, we will support you
                  using this email form.
                </Typography>
                <Typography variant="h6" color="white" sx={{ mt: "5vh" }}>
                  ・Where the problem occurred
                  <br />
                  ・What happened
                  <br /> ・configuration of the model used etc, <br />
                  We would appreciate it if you could describe it in as much
                  detail as possible. Also, go to "support@yoshino.com" with the
                  above information and screenshots if possible.
                  <br />
                  If you can show it, we can respond in more detail.
                </Typography>
                <Typography variant="h4" color="#be00be" sx={{ mt: "7vh" }}>
                  ▶︎ Message
                </Typography>
                <Typography variant="h6" color="white" sx={{ mt: "3vh" }}>
                  We also accept your messages to voice actors and singers here.
                </Typography>
                <Typography variant="h6" color="white" sx={{ m: "3vh 0 6vh" }}>
                  Please contact us if you'd like to tell us your opinion and
                  suggestions.
                  <br />
                  Also, please use this form to send a message about our
                  production team.
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  type="text"
                  size="medium"
                  sx={{
                    borderRadius: "3px",
                    backgroundColor: "white",
                    width: { xs: "250px", sm: "300px", md: "35vw" },
                    mb: "2vh",
                    boxShadow: "3px 4px rgb(190, 0, 159)",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  type="text"
                  size="medium"
                  sx={{
                    borderRadius: "3px",
                    backgroundColor: "white",
                    width: { xs: "250px", sm: "300px", md: "35vw" },
                    mb: "2vh",
                    boxShadow: "3px 4px rgb(190, 0, 159)",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Message"
                  variant="filled"
                  rows={4}
                  multiline
                  type="text"
                  size="medium"
                  sx={{
                    borderRadius: "3px",
                    backgroundColor: "white",
                    width: { xs: "250px", sm: "300px", md: "35vw" },
                    mb: "2vh",
                    boxShadow: "3px 4px rgb(190, 0, 159)",
                  }}
                />
              </CardContent>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Support;
