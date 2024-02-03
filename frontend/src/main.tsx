import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
