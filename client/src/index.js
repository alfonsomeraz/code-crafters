import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExamsContextProvider } from './context/ExamContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExamsContextProvider>
      <App />
    </ExamsContextProvider>
  </React.StrictMode>
);

