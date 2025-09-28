import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ListenAndWatchPage from './pages/ListenAndWatchPage';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/listen-and-watch',
        element: <ListenAndWatchPage />,
      },
      {
        path: '/help',
        element: <HelpPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/donate',
        element: <DonatePage />,
      },
    ],
  },
]);
