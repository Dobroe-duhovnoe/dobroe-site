import { Outlet } from 'react-router-dom';
import RadioPlayer from './RadioPlayer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RadioPlayer />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
