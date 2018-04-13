import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import withRoot from "../withRoot";

import Navbar from '../components/Navbar';
import AllSoftwareProjects from "../containers/AllSoftwareProjects";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class App extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return <div className={classes.root}>
        <Navbar />
        Quack <br />
        <AllSoftwareProjects />
      </div>;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
