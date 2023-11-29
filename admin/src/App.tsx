import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PermissionDenied from "./pages/noAccess/PermissionDenied";
import Charts from "./pages/analytics/Charts";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();
function App() {
  // const storageData = localStorage.getItem("persist:root");
  // const isAdmin: boolean = storageData
  //   ? JSON.parse(JSON.parse(storageData).user).currentUser?.token
  //   : false;
  const isAdmin = useSelector(
    (state: any) => state.user?.currentUser?.others.isAdmin
  );
  const user = useSelector((state: any) => state.user?.currentUser);

  const Layout = () => {
    return isAdmin && user ? (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <PermissionDenied />
    );
  };

  const LoginRoute = () => {
    return user ? (window.location.href = "/") : <Login />;
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
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        // {
        //   path: "/products/edit/:id",
        //   element: <Edit />,
        // },
        {
          path: "/analytics/charts",
          element: <Charts />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
