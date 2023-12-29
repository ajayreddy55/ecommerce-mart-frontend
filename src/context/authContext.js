import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const AuthProviderFunction = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const registerUser = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password, displayName);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const loginWithGooglePopup = () => {
    const googleAuthProviderIns = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProviderIns);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser !== null) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const constantContextObject = {
    user,
    registerUser,
    loginUser,
    setIsLoggedIn,
    setUser,
    isLoggedIn,
    signOutUser,
    loginWithGooglePopup,
  };

  return (
    <authContext.Provider value={constantContextObject}>
      {children}
    </authContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(authContext);
};
