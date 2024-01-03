import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoding, setisLoding] = useState(true);
  const [authError, setauthError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setisLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setauthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate("/");
      })
      .catch((error) => {
        setauthError(error.message);
      })
      .finally(() => setisLoding(false));
  };

  const logInUser = (email, password, navigate) => {
    setisLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })

      .finally(() => setisLoding(false));
  };

  const signInWithGoogle = () => {
    setisLoding(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setauthError("");
      })
      .catch((error) => {
        setauthError(error.message);
      })

      .finally(() => setisLoding(false));
  };

  //   observer user state
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setisLoding(false);
    });
    return () => unsubcribe;
  }, []);

  const logout = () => {
    setisLoding(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setisLoding(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    registerUser,
    logInUser,
    logout,
    isLoding,
    authError,
    signInWithGoogle,
  };
};
export default useFirebase;
