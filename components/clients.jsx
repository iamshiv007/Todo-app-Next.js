"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/auth/me`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const LogoutBtn = () => {
  const { user } = useContext(Context);

  const logoutHandler = () => {
    axios
      .get(`/api/auth/logout`)
      .then((res) => alert(res.data.message))
      .catch((err) => console.log(err));
  };

  return user._id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href="/login">Log In</Link>
  );
};

export const TodoButton = () => {};
