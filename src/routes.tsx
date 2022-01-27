import { Slides } from "./components/Slides/Slides";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";

export const routes = [
  {
    id: 0,
    path: "/",
    element: Slides,
  },
  {
    id: 1,
    path: "/project/:id",
    element: ProjectDetails,
  },
];
