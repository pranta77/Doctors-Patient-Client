import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MakeAdmin() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdmibSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
          setEmail("");
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h1> Make An Admin</h1>
      <form onSubmit={handleAdmibSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="email"
          label="Email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity="success">
          Made Email successfully — check it out!
        </Alert>
      )}
    </div>
  );
}
