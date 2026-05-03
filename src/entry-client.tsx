import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

if (rootEl.innerHTML.trim().length > 0) {
  hydrateRoot(rootEl, tree);
} else {
  createRoot(rootEl).render(tree);
}
