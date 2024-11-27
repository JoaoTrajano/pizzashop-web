import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])
