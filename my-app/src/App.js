import './App.css';
import Weather from "./Weather";
import { ThreeDots } from  'react-loader-spinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Chania" />
        <ThreeDots
          height="100"
          width="100"
          color='grey'
          ariaLabel='loading'
        />
      </header>
    </div>
  );
}

export default App;
