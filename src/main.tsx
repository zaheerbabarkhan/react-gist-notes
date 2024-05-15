import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <App />
  </React.StrictMode>,
)
