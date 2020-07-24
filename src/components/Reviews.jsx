import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TestimonialCard from "./TestimonialCard";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.primary.dark,
  },

  heading: {
    color: theme.palette.common.white,
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

const Reviews = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Typography variant="h3" className={classes.heading}>
        Reviews
      </Typography>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TestimonialCard
              avatar="images/persona-2.svg"
              title="Karl Van Lieshout"
              subtitle="Owner & Operator – Ausbeds"
              comments={["innovative", "seamless UX", "more online sales"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TestimonialCard
              avatar="images/persona-1.svg"
              title="Rosawin Siri"
              subtitle="Digital Marketing Manager – 4mation Technologies"
              comments={["flexible", "nailed voice & tone", "keep on retainer"]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TestimonialCard
              avatar="images/persona-3.svg"
              title="Craig Erskine-Smith"
              subtitle="CEO – Erskine Oral Care"
              comments={[
                "wonderful ideas",
                "perfect tagline",
                "excellent wireframes",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TestimonialCard
              avatar="images/persona-4.svg"
              title="Eoin Mullins"
              subtitle="Director – Corbel Technologies"
              comments={[
                "beautiful copy",
                "psychology edge",
                "emotional currents",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TestimonialCard
              avatar="images/persona-5.svg"
              title="Liam Key"
              subtitle="Creative Director – Imagination Pioneers Studios"
              comments={[
                "love his passion",
                "heaps of depth",
                "speaks to my brand",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TestimonialCard
              avatar="images/persona-6.svg"
              title="Adrian Rodriguez Soto"
              subtitle="eCommerce Manager – EUX Agency"
              comments={[
                "superior intellect",
                "deep psychology",
                "doubled conversions",
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default Reviews;
