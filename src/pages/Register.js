import React, { useState } from "react";
import Input from "../components/FormFields/Input";
import usePasswordValidation from "../hooks/passwordValidation";

const Register = () => {
  const [inputs, setInputs] = useState({});

  const [password, setPassword] = useState({
    password: "",
    passwordConfirmation: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handlePasswordChange = (event) => {
    setPassword({ ...password, password: event.target.value });
  };

  const handlePasswordConfirmationChange = (event) => {
    setPassword({ ...password, passwordConfirmation: event.target.value });
  };

  const [match, length] = usePasswordValidation({
    password: password.password,
    passwordConfirmation: password.passwordConfirmation
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(event.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="firstName"
          label="First Name"
          type="text"
          required
          size="medium"
          onChange={handleChange}
        />
        <Input
          name="lastName"
          label="Last Name"
          type="text"
          required
          size="medium"
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          required
          size="medium"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          required
          size="medium"
          onChange={handlePasswordChange}
        />
        <Input
          name="passwordConfirmation"
          type="password"
          label="Confirm Password"
          required
          size="medium"
          onChange={handlePasswordConfirmationChange}
        />
        <div>
          <ul>
            {match ? "" : <li>"Passwords don't match."</li>}
            {length ? (
              <li>"Passwords lenght should be greater than 8."</li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <button type="submit">Register </button>
        <a href="/login">or Login</a>
      </form>
    </div>
  );
};

export default Register;
