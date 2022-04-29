import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const [showerr, setShowerr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name: event.target.Username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axios
      .post("https://flight-airport.herokuapp.com/register", payload)
      .then((response) => {
        console.log(response);
        alert("Register Successfull");
        navigate("/login");
      })
      .catch((err) => {
        setShowerr(true);
      });
  };
  //if field is empty disable buttons
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="Username"
                  required={true}
                  fullWidth
                  id="Username"
                  InputLabelProps={showerr ? { style: { color: "red" } } : null}
                  label={showerr ? "Invalid Name" : "Name"}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="email"
                  InputLabelProps={showerr ? { style: { color: "red" } } : null}
                  label={showerr ? "Invalid Email" : "Email"}
                  name="email"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password"
                  InputLabelProps={showerr ? { style: { color: "red" } } : null}
                  label={showerr ? "Invalid Password" : "Password"}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <Typography
                  id="texthide"
                  sx={{
                    textAlign: "center",
                    paddingTop: "20px",
                    display: "none",
                    color: "red",
                  }}
                >
                  All Field is Required
                </Typography>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid
              container
              justifyContent="flex-end"
              sx={{ cursor: "pointer" }}
            >
              <Grid item>
                <Link onClick={() => navigate("/login")} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
