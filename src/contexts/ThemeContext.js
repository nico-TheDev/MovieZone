import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    mainColor: "#E43F5A",
    mainDark: "#1B1B2F",
    mainMid: "#1F4068",
};

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
