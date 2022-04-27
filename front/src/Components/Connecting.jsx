import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Connecting({ flightData }) {
  return (
    <>
      <Box>
        <Container component="main" maxWidth="m">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Airline</StyledTableCell>
                  <StyledTableCell align="center">
                    Start Airport
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Connecting Flight
                  </StyledTableCell>
                  <StyledTableCell align="center">End Airport</StyledTableCell>
                  <StyledTableCell align="center">Cost</StyledTableCell>
                  <StyledTableCell align="center">Start Time</StyledTableCell>
                  <StyledTableCell align="center">End Time</StyledTableCell>
                  <StyledTableCell align="center">PNR</StyledTableCell>
                  <StyledTableCell align="center">Capacity</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flightData.map((el) => (
                  <StyledTableRow key={el._id} sx={{ cursor: "pointer" }}>
                    <StyledTableCell align="center">
                      {el.airline}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {el.startairport}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {el.connecting}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {el.endairport}
                    </StyledTableCell>
                    <StyledTableCell align="center">{el.cost}</StyledTableCell>
                    <StyledTableCell align="center">
                      {el.starttime}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {el.endtime}
                    </StyledTableCell>
                    <StyledTableCell align="center">{el.pnr}</StyledTableCell>
                    <StyledTableCell align="center">
                      {el.capacity}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
}
