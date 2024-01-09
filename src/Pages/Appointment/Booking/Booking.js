import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

export default function Booking({ booking, selected, setBookingSuccess }) {
  const { name, time, space, price } = booking;
  const [openBooking, setBookingOpen] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "#03a9f4", fontWeight: 600 }}
            variant="h5"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACE AVAILABLE
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Price ${price}
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT{" "}
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        selected={selected}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
}
