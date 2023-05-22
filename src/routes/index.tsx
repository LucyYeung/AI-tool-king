import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import ErrorPage from './error/error-page';
import { Home } from './home';

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
