import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = props => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/user"
        }).then(res => {
            setUser(res.data);
        })
    }, []);

    return (
        <UserContext.Provider value={[user]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider; 