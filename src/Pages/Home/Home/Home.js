import React from "react";
import Navigation from "./Shared/Navigation/Navigation";
import Services from "../Services/Services";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";

export default function () {
  return (
    <div>
      <Navigation />
      <Banner />
      <Services />
      <AppointmentBanner />
    </div>
  );
}
