import React from "react";
import Navigation from "../../Home/Home/Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import { useState } from "react";

export default function Appointment() {
  const [selected, setSelected] = useState(new Date());
  console.log(selected);
  return (
    <div>
      <Navigation />
      <AppointmentHeader setSelected={setSelected} selected={selected} />
      <AvailableAppointment selected={selected} />
    </div>
  );
}
