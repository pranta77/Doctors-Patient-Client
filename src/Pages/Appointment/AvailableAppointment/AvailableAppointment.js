import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  { id: 1, name: "Teeth Orthodonics", time: "08.00 AM - 09.00 PM", space: 10 },
  { id: 2, name: "Cosmetic Dentistry", time: "09.00 AM - 10.00 PM", space: 8 },
  { id: 3, name: "Teeth Cleaning", time: "10.00 AM - 11.00 PM", space: 9 },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 AM - 07.00 PM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 AM - 08.00 PM",
    space: 10,
  },
];

export default function AvailableAppointment({ selected }) {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ color: "#03a9f4", fontWeight: 600, mb: 4 }}
      >
        Available Appointment {selected?.toDateString()}{" "}
        {bookingSuccess && (
          <Alert severity="success">
            Appointment Booked Check when its time
          </Alert>
        )}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            selected={selected}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
}
