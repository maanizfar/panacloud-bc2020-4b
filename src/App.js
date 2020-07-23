import React from "react";
import TopBar from "./components/TopBar";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./styles";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <main>
        <Header />
        <Services />
      </main>
    </ThemeProvider>
  );
}

export default App;
