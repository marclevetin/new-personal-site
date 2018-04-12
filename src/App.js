import React, { Component } from 'react';

// material-ui
import CssBaseline from "material-ui/CssBaseline";
import NavBar from './Navbar';

class App extends Component {
  render() {
    return <React.Fragment>
        <CssBaseline />
        <NavBar/>
        Test
      </React.Fragment>;
  }
}

export default App;
