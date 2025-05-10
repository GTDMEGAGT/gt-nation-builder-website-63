import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react'; // ✔️ Correct import

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found"); // ✔️ Good error handling

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* ✔️ Proper placement */}
  </React.StrictMode>
);