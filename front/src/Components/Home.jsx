import React from "react";
import ShowTable from "./ShowFlight";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/action";
import Register from "./Register";

const Home = () => {
  const dispatch = useDispatch();

  const token = useSelector((store) => store.LogInReducer.token);
  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));
  return <>{!token ? <Register /> : <ShowTable />}</>;
};

export default Home;
