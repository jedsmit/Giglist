import axios from "axios";

export default {
  getSetlists: function () {
    return axios.get("/api/setlists");
  },
  addSetlist: function (obj) {
    console.log(obj)
    return axios.post("/api/setlists", obj);
  },
  getSetlist: function (id) {
    console.log("API getting" + id)
    return axios.get("/api/setlists/" + id);
  },
  getSongs: function () {
    return axios.get("/api/songs");
  },
  addSong: function (obj) {
    return axios.post("/api/songs", obj);
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
  },
  loginUser: function (obj) {
    axios.post("api/auth/login", obj);
  }
};