import './App.css';
import List from './component/List';

function App() {
  const items = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <>
    <h1>The days of the week</h1>
    <List items = {items}/>
    </>
  );
}

export default App;
