import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://rose-gothic-goose-655.mypinata.cloud/ipfs/QmPDEh6qUyb67aCpox7T2anjBQjNyyVRCEbnQ4NHHXDkoi">
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);
