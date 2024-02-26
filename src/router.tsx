import { createBrowserRouter } from "react-router-dom";
import { CustomHome } from "./homePage/Home";

type RouteElement = React.ReactElement | null;
interface Route {
  path: string;
  element: RouteElement;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomHome/>,
  },
 
] as Route[]); 