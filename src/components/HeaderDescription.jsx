import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },

  title1: {
    textTransform: "uppercase",
    fontWeight: 500,
    lineHeight: 1,
  },

  title2: {
    textTransform: "uppercase",
    lineHeight: 0.75,
    margin: 0,
    fontWeight: 100,
  },

  paragraph: {
    margin: "3rem 0",
    lineHeight: 1,

    [theme.breakpoints.up("md")]: {
      maxWidth: 420,
    },
  },

  button: {
    padding: "0.6rem 1.5rem",
    borderRadius: "40px",
    backgroundImage: `linear-gradient(to top,${theme.palette.secondary.main},${theme.palette.secondary.dark})`,
    transition: "all 0.2s ease",
    maxWidth: 130,

    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 5px 10px 2px rgba(82, 82, 82, 0.75)",
    },
  },
}));

const HeaderDescription = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.title1} variant="h1">
          Cortex
        </Typography>
        <Typography className={classes.title2} variant="h2">
          Copywriter
        </Typography>
      </div>

      <Typography variant="body1" className={classes.paragraph}>
        Enhance your communications with psychology-based copywriting and UX
        writing
      </Typography>

      <div className={classes.button}>
        <Typography variant="button">Send a message</Typography>
      </div>
    </div>
  );
};

export default HeaderDescription;
