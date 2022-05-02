import React from "react";
import ShowTable from "./ShowFlight";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/Login/action";
import Register from "./Register";

const Home = () => {
  const dispatch = useDispatch();

  const auth = useSelector((store) => store.login.isAuth);

  const token = localStorage.getItem("auth");
  dispatch(loginSuccess(token));

  return <>{!auth ? <Register /> : <ShowTable />}</>;
};

export default Home;
