import CustomRoutes from "./routes/CustomRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="flex justify-center items-center heading text-4xl font-extrabold">
        <Link to="/">React Image Gallery</Link>
      </h1>
      <CustomRoutes />
    </>
  );
}

export default App;
