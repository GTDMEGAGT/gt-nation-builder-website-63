
import React from 'react'; // Keep this
import { createRoot } from 'react-dom/client'; // Keep this import style
import App from './App.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react'; // Add this new import

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* Add this line right after <App /> */}
  </React.StrictMode>
);
