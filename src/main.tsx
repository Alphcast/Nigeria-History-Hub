import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
    <Analytics />
    <SpeedInsights />
  </ThemeProvider>
);
