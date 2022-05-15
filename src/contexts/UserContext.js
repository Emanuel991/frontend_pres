import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [operation, setOperation] = useState([]);
  return (
    <UserContext.Provider value={ {user, setUser, operation, setOperation} }>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext