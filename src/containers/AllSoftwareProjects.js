import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from "material-ui/Grid";
import SoftwareProject from "../components/SoftwareProject";

const styles = {
  root: {
    flexGrow: 1,
  }
};

function AllSoftwareProjects(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <Typography variant="headline">Software Projects</Typography>
      <Grid container spacing={16} justify={"center"}>
        <SoftwareProject imageurl="placeholder" imageTitle="placeholder" headline="Lizard" description="Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica" liveURL="placeholder" sourceURL="placeholder" />
        <SoftwareProject />
        <SoftwareProject />
        <SoftwareProject />
        <SoftwareProject />
        <SoftwareProject />
        <SoftwareProject />
      </Grid>
    </div>;
}

AllSoftwareProjects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllSoftwareProjects);
