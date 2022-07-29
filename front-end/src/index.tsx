import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './assets/css/global';
import store from './store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id': 'AVp1720Oe44DJu1rzw8DTOJhw2VXQkE4oYiUQsd61ZhHB2rFMx0zkdgv34dR9fMwc_e-LvTne6Pa-gsS',
  currency: 'USD'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PayPalScriptProvider options={paypalOptions}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </ReduxProvider>
  </React.StrictMode>
);
