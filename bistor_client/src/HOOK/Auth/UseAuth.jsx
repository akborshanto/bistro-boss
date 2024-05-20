import React, { useContext } from 'react'
import { AuthContextProvider} from '../../FIREBASE/AuthProvider'
const UseAuth = () => {
  const auth=useContext(AuthContextProvider)

  return  auth
}

export default UseAuth
