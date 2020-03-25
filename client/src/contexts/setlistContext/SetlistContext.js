import React, { useState, setState, useReducer, createContext } from "react";
import { set } from "mongoose";

export const SetlistContext = createContext();

export const SetlistProvider = (props) => {
    // const [setlist, setSetlist] = useState([
    //     {
    //         id: null,
    //         gigtype: null,
    //         songs: []
    //     }
    // ])
    const [setlistId, setSetlistId] = useState("")

    return (
        <SetlistContext.Provider
            value={[setlistId, setSetlistId]}
        >
            {props.children}
        </SetlistContext.Provider>

    );
};


