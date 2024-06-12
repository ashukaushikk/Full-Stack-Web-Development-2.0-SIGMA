import CustomRoutes from "./routes/CustomRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="flex justify-center items-center heading text-4xl font-extrabold">
        <Link to="/">Walkthrough with React Part 3</Link>
      </h1>
      <CustomRoutes />
    </>
  );
}

export default App;
