import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Tiktok from "./pages/Tiktok";
import Youtube from "./pages/Youtube";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Loader />,
      <Navbar />,
      <Outlet />
      <Footer />
    </div>
  );
};

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
        path: "/youtube",
        element: <Youtube />,
      },
      {
        path: "/tiktok",
        element: <Tiktok />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
