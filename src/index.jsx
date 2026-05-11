import React from "react";
import { createRoot } from "react-dom/client";
import GlobalContextProvider from "./contexts/GlobalContext";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
);
