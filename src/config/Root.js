import { StrictMode } from "react";
import { Provider } from 'react-redux'
import store from "../store"
import App from "../App"

function Root() {
    return (
        <StrictMode>
         <Provider store={store}>
            <App />
        </Provider>    
      </StrictMode>
    );
  }
  
  export default Root;