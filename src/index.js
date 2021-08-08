import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
// import { storeCounter } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    {/* <Provider store={storeCounter}> */}
    <App />
    {/* </Provider> */}
  </Provider>,
  document.getElementById("root")
);
