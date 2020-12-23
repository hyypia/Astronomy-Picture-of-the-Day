import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import store from './store';
import ErrorBoundary from './components/ErrorBoundry';
import ApiService from './services/apiService';
import { ApiServiceProvider } from './components/ApiServiceContext';
import App from './components/App';

const apiService = new ApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ApiServiceProvider value={apiService}>
        <Router>
          <App />
        </Router>
      </ApiServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
