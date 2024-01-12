import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutFrom from "./CheckoutFrom/CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OWgQFBMa67f70mq3A6Pf2jKDPfxGbMbiXUGRz4k2eB2xZG5I28mMQFEEuwLOOA4WvdKc1PCWyyKjL6ifZILRDGK00GXlT6woM"
);

export default function Payment() {
  const { appointmentID } = useParams();
  const [appointment, setAppointments] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentID}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointmentID]);
  return (
    <div>
      <h1>
        Please Do Payment For: {appointment.patientName} For{" "}
        {appointment.serviceName}{" "}
      </h1>
      <h3>Pay: ${appointment.price}</h3>

      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutFrom appointment={appointment} />
        </Elements>
      )}
    </div>
  );
}

/* 
1.Install Stripe and Stripe React
2. Set publishabel Key
3.Elements
4.CheckOutFrom
---------------
5. Create Payment Method


*/
