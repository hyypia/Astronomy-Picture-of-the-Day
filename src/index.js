import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import store from './store';
import ErrorBoundary from './components/ErrorBoundry';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      {/* <ApiServiceProvider value={apiService}> */}
      <Router>
        <App />
      </Router>
      {/* </ApiServiceProvider> */}
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
