// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';


ReactDOM.render(
  <Provider store={applicationStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
