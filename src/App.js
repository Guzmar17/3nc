import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-blue-200 min-h-screen flex flex-col justify-center items-center">
      <header className="App-header">
        <img src={logo} className="App-logo w-32 h-32" alt="logo" />
        <p className="text-xl font-bold mt-4">
          Messi el meeeeeeeeeejor
        </p>
        <a
          className="App-link mt-2 text-blue-500 hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
