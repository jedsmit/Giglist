import axios from "axios";

export default {
  getSetlists: function () {
    return axios.get("/api/setlists");
  },
  addSetlist: function (obj) {
<<<<<<< HEAD
=======
    console.log(obj)
>>>>>>> b4020ab9f5cefc0ee8ee5a6350eddaf30913421e
    return axios.post("/api/setlists", obj);
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
<<<<<<< HEAD
    return axios.get("api/users");
  },
  updateSetlist: function () {
    return axios.put("api/setlists")
=======
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
>>>>>>> b4020ab9f5cefc0ee8ee5a6350eddaf30913421e
  }
};