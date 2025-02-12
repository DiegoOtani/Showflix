import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Globals.css'
import {ShowsProvider } from './contexts/TvShowsContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ShowsProvider>
        <RouterProvider router={router}/>
      </ShowsProvider>
    </UserProvider>
  </StrictMode>,
)
