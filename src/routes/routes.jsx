import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "../Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DashbordHome from "../Pages/Dashboard/DashbordHome/DashbordHome";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/appointment",
    element: (
      <PrivateRoute>
        <Appointment />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashboardhome",
        element: <DashbordHome />,
      },
      {
        path: "makeadmin",
        element: <MakeAdmin />,
      },
    ],
  },
]);

export default routes;
