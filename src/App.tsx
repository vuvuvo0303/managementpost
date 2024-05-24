import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/DashBoardPage/DashBoard";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/management-posts",
      element: <DashBoard />,
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
