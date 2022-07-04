import { useEffect, useState } from "react";

const usePasswordValidation = ({
  password = "",
  passwordConfirmation = "",
  passwordLength = 8
}) => {
  console.log("validation hook initialized");
  const [match, setMatch] = useState(null);
  const [length, setLength] = useState(null);

  useEffect(() => {
    console.log("validation hook effect");
    const empty = password === "" && passwordConfirmation === "";
    const match = password === passwordConfirmation;
    setMatch(empty || match);
    setLength(password !== "" && password.length < passwordLength);
  }, [password, passwordConfirmation]);

  return [match, length];
};

export default usePasswordValidation;
