import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// other stuff that happen only in browser

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
