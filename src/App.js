// import logo from './logo.svg';
import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";

function App() {
  return (
    <div className="App">
      <h1>Counter with Class Component</h1>
      <CounterClass />
      <h1>Counter with Function Component</h1>
      <CounterFunction />
    </div>
  );
}

export default App;
