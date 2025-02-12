import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Globals.css'
import {ShowsProvider } from './contexts/TvShowsContext.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowsProvider>
      <RouterProvider router={router}/>
    </ShowsProvider>
  </StrictMode>,
)
