import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField } from "@mui/material";
import NonConnecting from "./NonConnecting";
import Connecting from "./Connecting";
import { useDispatch, useSelector } from "react-redux";
import {
  flightSuccessData,
  searchflightSuccessData,
} from "../Redux/Flight/action";

// import { setProducts } from "../Redux/action";

export default function ShowTable() {
  const dispatch = useDispatch();

  const { data: flightData, loading } = useSelector((store) => store.flight);
  console.log(loading);

  //   const [flightData, setFlightData] = useState([]);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    getallflight();
  }, []);

  const getallflight = () => {
    dispatch(flightSuccessData());
  };

  const handleSearchFlight = (event) => {
    event.preventDefault();
    const payload = {
      start: event.target.startairport.value,
      end: event.target.endairport.value,
    };
    dispatch(searchflightSuccessData(payload.start, payload.end));

    setConnect(true);
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://media1.giphy.com/media/kUTME7ABmhYg5J3psM/200.webp?cid=ecf05e47sadsaggykaoz49yqduo5hyrw95v3cjlfw0nj9jm1&rid=200.webp&ct=g"
            alt="loading"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      ) : (
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
                    label="From"
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
                    label="To"
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
      )}
    </>
  );
}
