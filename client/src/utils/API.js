import axios from "axios";

export default {
    getSetlists: function () {
        return axios.get("/api/setlists");
    },
    addSetlist: function () {
        // return axios.post("/api/setlists" + id)
    },
    getSongs: function () {
        return axios.get("api/songs");
    }

};