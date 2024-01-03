import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Register() {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const { user, registerUser, isLoding, authError } = useAuth();

  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  console.log(loginData);
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password) {
      alert("Your Password Did Not Match");
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            {" "}
            Register
          </Typography>
          {!isLoding && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onChange={handelOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onChange={handelOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onChange={handelOnChange}
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                name="password2"
                onChange={handelOnChange}
                type="password"
                variant="standard"
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
              <NavLink to="/login">
                <Button variant="text">
                  {" "}
                  ALREADY REGISTERED? PLEASE LOGIN
                </Button>
              </NavLink>
            </form>
          )}
          {isLoding && <CircularProgress />}
          {user.email && (
            <Alert severity="success">
              User Created successfully — check it out!
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "70%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}
