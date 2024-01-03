import { useContext } from "react";
import { AUthContext } from "../Context/AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AUthContext);
  return auth;
};

export default useAuth;
