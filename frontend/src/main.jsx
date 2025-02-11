import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Globals.css'
import {ShowsProvider } from './contexts/TvShowsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowsProvider>
      <App />
    </ShowsProvider>
  </StrictMode>,
)
