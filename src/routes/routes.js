import { createBrowserRouter } from "react-router-dom";
import CreateForm from "../Pages/CreateForm/CreateForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateForm></CreateForm>,
  },
]);
