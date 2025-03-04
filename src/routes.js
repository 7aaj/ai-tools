import { createBrowserRouter } from "react-router";
import KnowledgeHome from "./components/K-M/KnowledgeHome";
import OHTAITools from "./components/OHTAITools";
import BeamHome from "./components/beamCounter/BeamHome";
import DocuWhiz from "./components/K-M/KnowledgeHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OHTAITools />,
  },
  {
    path: "/beam-counter",
    element: <BeamHome />,
  },
  {
    path: "/knowledge-management",
    element: <DocuWhiz />,
  },
]);
