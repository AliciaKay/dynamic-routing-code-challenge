import logo from './logo.svg';
import './App.css';
import configureStore from "./store/configureStore";
import Routes from './components/routes'

const store = configureStore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Routes />
      </header>
    </div>
  );
}

export default App;
