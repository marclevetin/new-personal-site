import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from "material-ui/Grid";
import SoftwareProject from "../components/SoftwareProject";
import { allTheThings } from '../data/projects';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingTop: theme.spacing.unit * 10
  }
});

function AllSoftwareProjects(props) {
  const { classes } = props;

  const things = allTheThings.map(project => (
    <SoftwareProject
      key={`softwareproject${project.id}`}
      imageurl={project.imageurl}
      imageTitle={project.project}
      headline={project.project}
      description={project.description}
      liveURL={project.liveurl}
      sourceURL={project.codeurl}
      tech={project.tech}
    />
  ));

  return <div className={classes.root}>
      <Typography className={classes.header} variant="display1">Software Projects</Typography>
      <Grid container spacing={16} justify={"center"} alignItems={"stretch"}>
        {things}
      </Grid>
    </div>;
}

AllSoftwareProjects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllSoftwareProjects);
