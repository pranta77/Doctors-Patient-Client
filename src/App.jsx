import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
