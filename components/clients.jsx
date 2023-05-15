import { useContext, useState } from "react";


export const context = useContext({ user: {}})
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
}