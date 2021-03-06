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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccessData } from "../Redux/Login/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showerr, setShowerr] = useState(false);

  const { loding } = useSelector((store) => store.login);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(loginSuccessData(payload, navigate, setShowerr, toast));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              InputLabelProps={showerr ? { style: { color: "red" } } : null}
              label={showerr ? "Invalid Email" : "Email"}
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              InputLabelProps={showerr ? { style: { color: "red" } } : null}
              label={showerr ? "Invalid Password" : "Password"}
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {loding ? (
              <div
                style={{
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47cum4nbvgem4krbwqndsxab7obx8hq20g5l2hygcx&rid=giphy.webp&ct=g"
                  alt=""
                  style={{
                    width: "60%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => navigate("/register")}
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
