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
import UseAxiosPublic from "../HOOK/AXIOS/AxiosPublic";
export const AuthContextProvider = createContext();


const AuthProvider = ({ children }) => {
  /*  axios publick get the token value*/
const axiosPublic=UseAxiosPublic()

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

/* use token */
if(currntUser){
  //get the email value
  const userInfo={email:currntUser.email}
  console.log(userInfo)
/* get the token ans store client site */
axiosPublic.post('/jwt',userInfo)
.then(res=>{
console.log(res.data.token)

if(res.data.token){

  localStorage.setItem('access_token',res.data.token)
}


})


}else{

///remove the token from local storage
localStorage.removeItem('access_token')
}

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
