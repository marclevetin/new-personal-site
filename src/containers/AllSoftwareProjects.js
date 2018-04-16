import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from "material-ui/Grid";
import SoftwareProject from "../components/SoftwareProject";
import { allTheThings } from '../data/projects';

const styles = {
  root: {
    flexGrow: 1,
  }
};

function AllSoftwareProjects(props) {
  const { classes } = props;

  const things = allTheThings.map(project => (
    <SoftwareProject
      imageurl="placeholder"
      imageTitle={project.project}
      headline={project.project}
      description={project.description}
      liveURL={project.liveurl}
      sourceURL={project.codeurl}
    />
  ));

  return <div className={classes.root}>
      <Typography variant="headline">Software Projects</Typography>
      <Grid container spacing={16} justify={"center"}>
        {things}
      </Grid>
    </div>;
}

AllSoftwareProjects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllSoftwareProjects);
