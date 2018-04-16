import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import withRoot from "../withRoot";

import Navbar from '../components/Navbar';
import AllSoftwareProjects from "../containers/AllSoftwareProjects";
import Intro from "../containers/Intro";

import Image from '../images/background.jpg';

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 10,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }
});

class App extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return <div className={classes.root}>
        <Navbar />
        <Intro />
        <AllSoftwareProjects />
      </div>;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
