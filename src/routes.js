import About from './About';
import Home from './Home';
import App from './App';
import NewStudentForm from './NewStudentForm';
import ErrorBoundary from './ErrorBoundary';

const routes = [
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
  ];

  export default routes;