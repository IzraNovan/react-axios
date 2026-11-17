import App from "@/App";
import CreateComment from "@/pages/CreateComment";
import EditComment from "@/pages/EditComment";
import { createBrowserRouter } from "react-router";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateComment />,
  },
  {
    path: "/edit",
    element: <EditComment />,
  },
]);
