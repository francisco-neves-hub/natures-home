import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //implementation of strict mode to guarantee cohesiveness of the code's logic
  <StrictMode>
    {/* Implementation of a custom scroll bar */}
    <SimpleBar
      autoHide={true}
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <App />
    </SimpleBar>
  </StrictMode>
);
