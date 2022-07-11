import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PayPalScriptProvider options={{ 'client-id': 'test' }}>
      <Provider store={store}>
        <App />
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);
