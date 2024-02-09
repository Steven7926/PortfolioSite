import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./css/App.css"

function App() {
  return (
    <main className="AppPage">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;