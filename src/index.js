import { StrictMode } from "react";
import ReactDOM from "react-dom";

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
