import axios from "axios";

export default {
    getSetlists: function () {
        return axios.get("/api/setlists");
    },
    addSetlist: function () {
        return axios.post("/api/setlists");
    },
    getSongs: function () {
        return axios.get("api/songs");
    }

};