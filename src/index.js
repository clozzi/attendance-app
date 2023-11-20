import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import About from './About';
import Home from './Home';
import App from './App';
import NewStudentForm from './NewStudentForm';
import ErrorBoundary from './ErrorBoundary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/newStudentForm",
        element: <NewStudentForm />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);

