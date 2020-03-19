import axios from "axios";

export default {
  getSetlists: function () {
    return axios.get("/api/setlists");
  },
  addSetlist: function (obj) {
    return axios.post("/api/setlists", obj);
  },
  getSongs: function () {
    return axios.get("api/songs");
  },
  addUser: function () {
    return axios.post("/api/users");
  },
  getUsers: function () {
    return axios.get("api/users");
  },
  updateSetlist: function () {
    return axios.put("api/setlists")
  }
};