import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

export default function Banner() {
  return (
    <Container style={{ bannerBg }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 14, fontWeight: 300, color: grey }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              totam eaque natus, delectus cumque sapiente!
            </Typography>
            <Button variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: 400 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}
