import React, { useState, setState, useReducer, createContext } from "react";
import { set } from "mongoose";

export const SetlistContext = createContext();

export const SetlistProvider = (props) => {

    const [setlistId, setSetlistId] = useState("");
    const [setlistSongs, setSetlistSongs] = useState([]);

    return (
        <SetlistContext.Provider
            value={[setlistId, setSetlistId], [setlistSongs, setSetlistSongs]}
        >
            {props.children}
        </SetlistContext.Provider>

    );
};


