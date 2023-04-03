import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './containers/Redux/store/store';
import { Provider } from 'react-redux';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Navbar from './containers/components/Navbar';
import Footer from './containers/components/Footer';
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <App />
      <Footer/>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
