import { useContext, useState } from "react";


export const context = useContext({ user: {}})
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
}

export const LogoutBtn = () => {

    const logoutHandler = () => {

    }

    return(
        <button className="btn" onClick={logoutHandler}>
            Logout
        </button>
    )
}

export const TodoButton = () => {
    
}