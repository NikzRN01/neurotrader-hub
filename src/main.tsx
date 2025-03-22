
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './providers/ThemeProvider.tsx'

// Initialize theme based on user preference
const initialTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.add(initialTheme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
