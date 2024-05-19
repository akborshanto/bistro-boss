import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContextProvider = createContext();
const AuthProvider = ({ children }) => {
  /*  */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  /* cerate a user */
  const auth = getAuth(app);
  /*  gogle provider
   */

  const provider = new GoogleAuthProvider();

  /* create a user */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
  };

  /* onAuthStateChange */
  useEffect(() => {
    const unSubscribe = (auth,currentUser) => {
      setUser(currentUser);
      setLoading(false);
    };
    return () => {
      return unSubscribe();
    };
  }, []);

  /* loging with google */
  const gogoleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  /* sign Out */
  const signOuts = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    gogoleLogin,
    signOuts,
    
  };
  return (
    <div>
      <AuthContextProvider.Provider value={authInfo}>
        {children}
      </AuthContextProvider.Provider>
    </div>
  );
};

export default AuthProvider;
