import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./firebaseconfig/firebaseConfig"
import App from './App';
import { Theme } from '@radix-ui/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <App  />
    </Theme>
  </React.StrictMode>
);

