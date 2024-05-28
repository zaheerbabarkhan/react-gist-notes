import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import "./styles.scss"
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <App />
  </Provider>

)
