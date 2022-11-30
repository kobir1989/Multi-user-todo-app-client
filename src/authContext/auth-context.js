import axios from "axios";
import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const userRes = await axios.get("https://multi-user-todo-app-server-production.up.railway.app/loggedIn");
      setUser(userRes.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user, "Auth");
  return <UserContext.Provider value={{ user, getUser }}>{props.children}</UserContext.Provider>;
};

export default UserContext;
export { UserContextProvider };
