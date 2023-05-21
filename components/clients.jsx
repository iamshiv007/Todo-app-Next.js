"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [taskReload, setTaskReload] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/auth/me`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        taskReload,
        setTaskReload,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const LogoutBtn = () => {
  const { user, setUser } = useContext(Context);
  const router = useRouter();

  const logoutHandler = () => {
    axios
      .get(`/api/auth/logout`)
      .then((res) => {
        alert(res.data.message);
        router.push("/login");
        setUser({});
      })
      .catch((err) => console.log(err));
  };

  return user._id ? (
    <>
      <Link href="/profile">Profile</Link>
      <button className="btn" onClick={logoutHandler}>
        Logout
      </button>
    </>
  ) : (
    <Link href="/login">Log In</Link>
  );
};

export const TodoButton = ({ id, isCompleted }) => {
  const { taskReload, setTaskReload } = useContext(Context);

  const updateHandler = (id) => {
    axios
      .put(`/api/task/${id}`, { isCompleted: !isCompleted })
      .then((res) => {
        alert(res.data.message);
        setTaskReload(!taskReload);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const deleteHandler = (id) => {
    axios
      .delete(`/api/task/${id}`)
      .then((res) => {
        alert(res.data.message);
        setTaskReload(!taskReload);
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <input
        type="checkbox"
        onChange={() => updateHandler(id)}
        checked={isCompleted}
      />
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </>
  );
};
