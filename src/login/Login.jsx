import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import "./Login.scss";

export const Login = () => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleUsername = username => {
    console.log(`log/user-name-update: ${username}`);
    setState({ ...state, username });
  };

  const handlePassword = password => {
    console.log(`log/password: ${password}`);
    setState({ ...state, password });
  };

  const handleSubmit = () => {
    console.log(
      `log/submit: login-button clicked! : username : ${
        state.username
      } : password : ${state.password}`
    );
  };

  const disableLogin = state.username && state.password ? false : true;

  console.log(disableLogin, state.username, state.password);

  return (
    <div className="login">
      <Input
        label="Username"
        placeholder="type your user-id"
        onChange={handleUsername}
      />
      <Input label="Password" isPassword={true} onChange={handlePassword} />
      <Button
        onClick={handleSubmit}
        disabled={disableLogin}
        className="login-button"
      >
        Login
      </Button>
    </div>
  );
};
