import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagePosts from "./pages/DashBoardPage/ManagePosts";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoardPage/Dashboard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashBoard />,
    },
    {
      path: "/dashboard",
      children: [{ path: "/dashboard/management-posts", element: <ManagePosts /> }],
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
