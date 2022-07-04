import React, { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue = "") => {
  const [state, setState] = useState(() => {
    //lazy initializer --> it's called the first time the page is loaded
    console.log(
      `lazy initialized set key: ${key}, defaultValue: ${defaultValue}`
    );
    const storedValue = window.localStorage.getItem(key) || defaultValue;

    //localstorage stores strings only
    return storedValue === "true" || storedValue === "false"
      ? storedValue === "true"
      : storedValue;
  });

  // it's called everytime page is refreshed
  useEffect(() => {
    console.log(`initialized effect ${key}, ${state}`);
    window.localStorage.setItem(key, state);
    return () => {
      // it's called before the effect
      console.log(`cleanup layout effect for ${key}`);
    };
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
