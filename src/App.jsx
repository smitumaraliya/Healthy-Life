import "./App.css";
import Home from "./Components/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./Components/Blogs";
import FAQ from "./Components/FAQ";
import Shop from "./Components/Shop";
import AboutUs from "./Components/AboutUs";
import Dropdown1 from "./Components/Drop";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/FAQ",
      element: <FAQ />,
    },
    {
      path: "/About",
      element: <AboutUs />,
    },
  ]);

  return (
    <>
    <Dropdown1/>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
