import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import ErrorPage from '../pages/error-page';
import { Home } from '../pages/home';
import PricePage from '../pages/price-page';

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
      {
        path: '/price',
        element: <PricePage />,
      },
    ],
  },
]);
