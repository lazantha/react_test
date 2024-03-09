import logo from './logo.svg';
import './App.css';
import PartOne from './components/partOne.js'; // Capitalize component name

function App() {
  return (
    <div className="App">
      <h1>Hello from react js</h1>
      <PartOne /> {/* Use capitalized component name */}
      <PartOne />
      <PartOne />
    </div>
  );
}

export default App;
