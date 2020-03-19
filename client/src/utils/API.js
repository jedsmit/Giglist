import axios from "axios";

export default {
  getSetlists: function () {
    return axios.get("/api/setlists");
  },
  addSetlist: function () {
    return axios.post("/api/setlists");
  },
  getSongs: function () {
    return axios.get("/api/songs");
  },
  addUser: function (obj) {
    return axios.post("/api/users", obj);
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  authUser: function () {
    return axios.post("/api/auth");
  },
  getUser: function () {
    axios.get("/api/auth/user");
  }
};