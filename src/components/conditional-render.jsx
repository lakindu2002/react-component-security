import { Fragment } from "react";

const Reactor = () => {
  return <></>;
};

const Login = () => {
  return <></>;
};

export const ConditonalRender = () => {
  const isLoggedIn = localStorage.getItem("token");
  return <Fragment>{isLoggedIn ? <Reactor /> : <Login />}</Fragment>;
};
