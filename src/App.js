import React from "react";
import TopBar from "./components/TopBar";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./styles";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <main>
        <Header />
      </main>
    </ThemeProvider>
  );
}

export default App;
