import { createHashRouter } from 'react-router-dom'
import App from "./App";
import About from "./routes/About";
import Projects from "./routes/Projects";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
]);

export default router;
