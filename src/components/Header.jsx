import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import HeaderDescription from "./HeaderDescription";
import HeaderImage from "./HeaderImage";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "6rem 0 3rem 0",
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `radial-gradient(circle at 90% 50%, ${theme.palette.primary.dark},  ${theme.palette.primary.main} )`,
    color: theme.palette.common.white,

    [theme.breakpoints.down("md")]: {
      backgroundImage: `radial-gradient(circle at 125% 50%, ${theme.palette.primary.dark},  ${theme.palette.primary.main} )`,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `radial-gradient(circle at 67.5% top, ${theme.palette.primary.dark},  ${theme.palette.primary.main} )`,
      paddingTop: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `radial-gradient(circle at 65% bottom, ${theme.palette.primary.dark},  ${theme.palette.primary.main} )`,
    },
  },

  description: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
      textAlign: "center",
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={5} className={classes.description}>
            <HeaderDescription />
          </Grid>
          <Grid item xs={12} md={7} className={classes.image}>
            <HeaderImage />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Header;
