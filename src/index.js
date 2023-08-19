import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppDataProvider } from './state/AppDataProvider';
import reducer, { initialState } from './state/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppDataProvider initialState={initialState} reducer={reducer} >
    <App />
  </AppDataProvider>
);


