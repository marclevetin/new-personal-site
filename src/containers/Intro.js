import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AboutMeAccordian from "./AboutMeAccordian";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    minHeight: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  heavy: {
    fontWeight: 'bold'
  }
});

function Intro(props) {
  const { classes } = props;

  return <div className={classes.root}>
      <Grid container spacing={16} justify={"center"}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h3">
              Howdy
            </Typography>
            <Typography component="p" paragraph={true}>
              I'm a web developer with a background in product management and customer service. Right now, I'm part of the instructional team at the UNH Coding Bootcamp. This site shows off a selection of the projects I've been involved with.
            </Typography>
          <Typography variant="headline" component="h3">
            Why all the Rubber Ducks?
            </Typography>
          <Typography component="p" paragraph={true} noWrap={false}>
            In software engineering, <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank" rel="noopener noreferrer">
              rubber duck debugging
              </a> or rubber ducking is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck. Many other terms exist for this technique, often involving different inanimate objects.
            </Typography>
          <Typography variant="headline" component="h3">
            Say hi
            </Typography>
          <Button color="primary" className={classes.button} href="https://www.linkedin.com/in/marclevetin/">
            LinkedIn
            </Button>
          <Button color="primary" className={classes.button} href="mailto:marc@derbyhat.org?subject='hi there!'">
            Email
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h3">
              About me
            </Typography>
            <AboutMeAccordian />
          </Paper>
        </Grid>
      </Grid>
    </div>;
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);
