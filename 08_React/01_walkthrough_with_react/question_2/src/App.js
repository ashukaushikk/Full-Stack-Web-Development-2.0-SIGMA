import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        text="Click Me"
        onClick={() => {
          alert("Button clicked!");
        }}
      />
    </>
  );
}

export default App;
