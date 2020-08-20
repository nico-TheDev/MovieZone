import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Theme from "./contexts/ThemeContext";

ReactDOM.render(
    <Theme>
        <App />
    </Theme>,
    document.getElementById("root")
);
