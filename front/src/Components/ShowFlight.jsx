import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField } from "@mui/material";
import NonConnecting from "./NonConnecting";
import Connecting from "./Connecting";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/action";

export default function ShowTable() {
  const dispatch = useDispatch();

  const flightData = useSelector((store) => store.getDataReducer.products);

  //   const [flightData, setFlightData] = useState([]);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    getallflight();
  }, []);

  const getallflight = () => {
    axios
      .get("http://localhost:8080/allflights")
      .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));
        // setFlightData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchFlight = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8080/flightbyname?startairport=${event.target.startairport.value}&endairport=${event.target.endairport.value}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));

        // setFlightData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setConnect(true);
  };

  return (
    <>
      <Box>
        <Box sx={{ ml: 4, mt: 4 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => setConnect(true)}
          >
            Connecting Flights
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setConnect(false)}
            sx={{ ml: 3 }}
          >
            Non-Connecting Flights
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box
            component="form"
            noValidate
            onSubmit={handleSearchFlight}
            sx={{ mt: 3 }}
            width={500}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
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
                  autoComplete="off"
                  name="endairport"
                  required
                  fullWidth
                  id="endairport"
                  label="End Airport"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search Flights
            </Button>
          </Box>
        </Box>

        {!connect ? (
          <NonConnecting flightData={flightData} />
        ) : (
          <Connecting flightData={flightData} />
        )}
      </Box>
    </>
  );
}
