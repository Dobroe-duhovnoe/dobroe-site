import StartPage from './components/StartPage';
import RadioPlayerProvider from './contexts/RadioPlayerProvider';
import './App.css';

function App() {
  return (
    <RadioPlayerProvider>
      <div className="App">
        <StartPage />
      </div>
    </RadioPlayerProvider>
  );
}

export default App;
