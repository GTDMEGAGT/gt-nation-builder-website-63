
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css'; // Make sure App.css is imported
import { Analytics } from '@vercel/analytics/react';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
