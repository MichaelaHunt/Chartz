import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx'
import DetailsView from './pages/DetailsView.tsx'
import SavedView from './pages/SavedView.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: null,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp/>
      }, 
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/details',
        element: <DetailsView/>
      },
      {
        path: '/saved',
        element: <SavedView/>
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
