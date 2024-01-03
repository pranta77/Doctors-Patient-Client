import { Container, Grid } from "@mui/material";
import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "../../Home/Home/Shared/Calendar/Calendar";

export default function AppointmentHeader({ setSelected, selected }) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calendar setSelected={setSelected} selected={selected} />
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}
