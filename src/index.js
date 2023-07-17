import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SubscriptionContextProvider } from './store/subscriptions-component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SubscriptionContextProvider>
      <App />
    </SubscriptionContextProvider>
  </React.StrictMode>

);


