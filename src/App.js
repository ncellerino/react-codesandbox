import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import ErrorBoundary from "./components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import useLocalStorageState from "./hooks/localStorageState";

function ErrorFallback({ error }) {
  return (
    <div>
      <p>Something went wrong!</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  console.log("App render start");

  const [showTilt, setShowTilt] = useLocalStorageState("showTilt", false);

  console.log("App render end");
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Login />
        <Register />
      </ErrorBoundary>
    </div>
  );
}

export default App;
