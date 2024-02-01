import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as React,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home";
import Summary from "./Component/Summary/Summary";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/summary/:id",
        element: <Summary />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
