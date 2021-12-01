import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import DialogueComponent from "./DialogueComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const dialogElement = document.getElementById("portal");
ReactDOM.createPortal(
  <StrictMode>
    <DialogueComponent />
  </StrictMode>,
  dialogElement
);
