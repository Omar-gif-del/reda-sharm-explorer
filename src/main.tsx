import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createElement } from 'react';

createRoot(document.getElementById('root')!).render(
  createElement(StrictMode, null, createElement(App))
);
