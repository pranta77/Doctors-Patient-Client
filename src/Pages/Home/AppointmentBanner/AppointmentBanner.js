import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  margin: 170,
};

export default function AppointmentBanner() {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          sx={{
            display: "flex",
            // alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              style={{ color: "#5CE7ED", marginTop: "20px" }}
            >
              Appointment
            </Typography>
            <Typography variant="h5" style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3 }}
              style={{ color: "white", fontSize: "11px", fontWeight: "300" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab illum
              vero aspernatur. Voluptas, molestias cupiditate.
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
