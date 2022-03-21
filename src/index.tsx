import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import './index.scss';
import './reset/reset.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import store from './containers/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
