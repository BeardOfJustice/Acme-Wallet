import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="gorilla wallet logo" />
        <p>
          Gorilla Wallet - Hodl like a Boss
        </p>
        <a
          className="App-link"
          href="https://gorillawallet.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://gorillawallet.org
        </a>
      </header>
    </div>
  );
}

export default App;
