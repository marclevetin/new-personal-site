import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import CssBaseline from "@material-ui/core/CssBaseline";
import registerServiceWorker from './registerServiceWorker';

function MyApp() {
    return (
        <React.Fragment>
            <CssBaseline />
            <App />
        </React.Fragment>
    );
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
