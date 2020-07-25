import React from "react";
import TopBar from "./components/TopBar";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./styles";
import Header from "./components/Header";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <main style={{ overflow: "hidden" }}>
        <Header />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
