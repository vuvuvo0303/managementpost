import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/DashBoardPage/DashBoard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/management-posts",
      element: <DashBoard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
