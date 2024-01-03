import React, { useState } from "react";
import Calendar from "../../Home/Home/Shared/Calendar/Calendar";
import { Grid } from "@mui/material";
import Appointments from "../Appointments/Appointments";

export default function DashbordHome() {
  const [selected, setSelected] = useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
        <Calendar selected={selected} setSelected={setSelected} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Appointments selected={selected} />
      </Grid>
    </Grid>
  );
}
