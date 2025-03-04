import { RouterProvider } from "react-router";
import "./App.css";
import OHTAITools from "./components/OHTAITools";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
