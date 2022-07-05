import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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

  console.log("App render end");
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>             
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="register" element={<Register />}/>                                                              
            </Route>
          </Routes>
       </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
