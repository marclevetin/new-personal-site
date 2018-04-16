import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    maxWidth: 350,
    margin: 10,
    minHeight: 200,
    padding: 10
  }
};

function Intro(props) {
  const { classes } = props;

  return <div className={classes.root}>
      <Grid container spacing={16} justify={"center"}>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h3">
              Howdy
            </Typography>
            <Typography component="p">
              I'm a web developer with a background in product management and
              customer service. Right now, I'm part of the instructional team
              at the UNH Coding Bootcamp. This site shows off a selection of
              the projects I've been involved with.
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h3">
              Rubber Duck
            </Typography>
            <Typography component="p">
              In software engineering, <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank" rel="noopener noreferrer">rubber duck debugging</a> or rubber ducking is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck. Many other terms exist for this technique, often involving different inanimate objects.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>;
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);
