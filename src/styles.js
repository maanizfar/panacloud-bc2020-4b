import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4b06c1",
      dark: "#ce02bd",
    },
    secondary: {
      main: "#1b5dbf",
      dark: "#23ffdb",
    },
  },
  typography: {
    h1: {
      "@media (max-width:500px)": {
        fontSize: "4.15rem",
      },
    },
    h2: {
      "@media (max-width:500px)": {
        fontSize: "2.5rem",
      },
    },
  },
});
// primary: "#4b06c1",
// primary2: "#ce02bd",

// secondary: "#1b5dbf",
// secondary2: "#23ffdb",

// const darkTheme = {
//   primary: "#111111",
//   primary2: "#8e8e8c",

//   secondary: "#1b5dbf",
//   secondary2: "#23ffdb",
// };

export default theme;
