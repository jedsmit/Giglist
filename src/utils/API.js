import axios from "axios";

export default {
    getSetlists: function () {
        return axios.get("/api/setlists");
    }
}