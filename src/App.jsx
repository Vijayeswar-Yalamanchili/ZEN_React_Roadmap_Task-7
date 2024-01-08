import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'

export const API_URL = "https://6597a585668d248edf231e3d.mockapi.io/books"

function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  </>
}

export default App