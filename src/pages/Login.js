import React, { useEffect, useState } from "react";
import Input from "../components/FormFields/Input";
import useLocalStorageState from "../hooks/localStorageState";

const error = "";

const handleThrowError = () => {
  throw new Error("Submited with errors!!!");
};

const isRememberMeActive = () => {
  return window.localStorage.getItem("rememberMe") === "true";
};

function Login() {
  const [rememberMe, setRememberme] = useLocalStorageState("rememberMe", false);

  const [login, setLogin] = useState(() => {
    let initialLogin = { username: "", password: "" };
    if (rememberMe) {
      initialLogin.username = window.localStorage.getItem("username");
    }
    return initialLogin;
  });

  // useEffect(() => {
  //   return () => {
  //     //clean up
  //   };
  // }, [rememberMe]);

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleOnChangeRememeberMe = (event) =>
    setRememberme(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    //not necessary when using state
    //const name = event.target.elements.inputName.value;
    console.log(`name submited: "${login.username}`);

    const usernameToStore = isRememberMeActive() ? login.username : "";
    window.localStorage.setItem("username", usernameToStore);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          id="inputUsername"
          name="username"
          label="Username"
          size="large"
          type="text"
          value={login.username}
          className="input-text"
          style={{ backgroundColor: "pink" }}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{error}</div>
      </div>
      <div>
        <Input
          id="inputPassword"
          name="password"
          label="Password"
          size="large"
          type="password"
          value={login.password}
          className="input-text"
          style={{ backgroundColor: "pink" }}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          id="showTilt"
          name="showTilt"
          size="large"
          type="checkbox"
          label="Remember me"
          checked={rememberMe}
          className="input-text"
          onChange={handleOnChangeRememeberMe}
        />
      </div>
      <div>
        <label>Your username is: {login.username}</label>
      </div>
      <button disabled={Boolean(error)} type="submit">
        Login
      </button>
      <a href="/register">or Register</a>
      <button type="button" onClick={handleThrowError}>
        Throw Error
      </button>
    </form>
  );
}

export default Login;
