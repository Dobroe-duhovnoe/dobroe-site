import { createBrowserRouter } from 'react-router';
import StartPage from './components/StartPage';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <StartPage />,
  },
]);
