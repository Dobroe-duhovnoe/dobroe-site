import { createBrowserRouter } from 'react-router-dom';
import StartPage from './components/StartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/:page',
    element: <StartPage />,
  },
]);
