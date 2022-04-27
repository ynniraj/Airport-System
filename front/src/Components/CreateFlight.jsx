import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function CreateFlight() {
  const navigate = useNavigate();

  const handleSubmitShopDetails = (event) => {
    event.preventDefault();
    const payload = {
      airline: event.target.airline.value,
      startairport: event.target.startairport.value,
      connecting: event.target.connecting.value || "Non-Stop",
      endairport: event.target.endairport.value,
      cost: event.target.cost.value,
      starttime: event.target.starttime.value,
      endtime: event.target.endtime.value,
      capacity: event.target.capacity.value,
    };
    axios
      .post("http://localhost:8080/createflight", payload)
      .then((res) => {
        console.log(res);

        alert("flight Details created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Flight
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitShopDetails}
              sx={{ mt: 3 }}
              width={900}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    autoComplete="off"
                    name="airline"
                    required
                    fullWidth
                    id="airline"
                    label="Airline Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="startairport"
                    label="Start Airport"
                    name="startairport"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="connecting"
                    label="Connecting Flight"
                    name="connecting"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="endairport"
                    label="End Airport"
                    name="endairport"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="cost"
                    label="Cost"
                    name="cost"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="starttime"
                    label="Start Time"
                    name="starttime"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="endtime"
                    label="End Time"
                    name="endtime"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="capacity"
                    label="Capacity"
                    name="capacity"
                    autoComplete="off"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Flight Details
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
