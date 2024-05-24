import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddPost from "../components/AddPostPage/AddPost";
import DashBoard from "../pages/dashboard/DashBoard";
import Home from "../components/HomePage/Home";
import ManagePosts from "../pages/dashboard/ManagePosts";
import Details from "../components/DetailsPage/Details";
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
    {
      path: "/addpost",
      element: <AddPost />,
    },
    {
      path: "/blogs/:id",
      element: <Details />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
