import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import ErrorPage from '../pages/error-page';
import { Home } from '../pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
