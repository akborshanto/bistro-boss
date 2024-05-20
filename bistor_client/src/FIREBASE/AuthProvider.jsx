import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContextProvider = createContext();


const AuthProvider = ({ children }) => {
  /*  */
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  /* cerate a user */
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  /*  gogle provider
   */


  /* create a user */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
  };






  /* onAuthStateChange */

useEffect(()=>{

const unSubsribe=onAuthStateChanged(auth,currntUser=>{
  setUser(currntUser)
  setLoading(false)
})

return ()=>{
  return unSubsribe()
}
},[])


/* signIn with Email and passwofd */
const signIn=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(email,password)
}
  /* loging with google */
  const gogoleLogin =async() => {
    setLoading(true);
    return await  signInWithPopup(auth,provider);
  };




/* update user */

const updateProfileUser=(displayName,photoURL)=>{
setLoading(true)
  return updateProfile(auth.currentUser, {
    displayName: displayName, photoURL:photoURL
  })
}





  /* sign Out */
  const signOuts = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    gogoleLogin,
    updateProfileUser,
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
