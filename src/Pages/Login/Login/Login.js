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

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const { user, logInUser, isLoding, authError, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    logInUser(loginData.email, loginData.password);
    e.preventDefault();
    navigate("/");
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    if (user.email) {
      navigate("/");
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            {" "}
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
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
            <Button
              sx={{ width: "75%", m: 1 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
            <NavLink to="/register">
              <Button variant="text"> NEW USER? PLEASE REGISTER</Button>
            </NavLink>
            {isLoding && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">
                User Created successfully — check it out!
              </Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>----------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            {" "}
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "70%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}
