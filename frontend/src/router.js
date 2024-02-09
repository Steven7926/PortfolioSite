import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Root from "./Root";
import Intro from "./pages/Introduction";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { path: "", element: <Intro /> },
        { path: "workexperience", element: <WorkExperience /> },
        { path: "education", element: <Education /> },
        { path: "skills", element: <Skills /> },
        { path: "projects", element: <Projects /> },
    ],
  },
]);

export default router;