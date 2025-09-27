import { RouterProvider } from 'react-router-dom';
import RadioPlayerProvider from './contexts/RadioPlayerProvider';
import { router } from './router';
import './App.css';

function App() {
  return (
    <RadioPlayerProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </RadioPlayerProvider>
  );
}

export default App;
