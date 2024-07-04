import "./App.css";
import useResize from "./useResize";

function App() {
  const screen = useResize();
  return (
    <div className="App">
      <p>Width: {screen?.w}</p>
      <p>Height: {screen?.h}</p>
    </div>
  );
}

export default App;
