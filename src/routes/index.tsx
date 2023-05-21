import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import ErrorPage from './error/error-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h1>首頁</h1>,
      },
    ],
  },
]);
