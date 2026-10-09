import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Root from "./Root";
import Intro from "./pages/Introduction";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Intro /> },
      { path: "work", element: <WorkExperience /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "education", element: <Education /> },
      { path: "resume", element: <Resume /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
