const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Routes
app.use(routes);

//Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:admin1@ds015869.mlab.com:15869/heroku_vv7kfg8j", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected, nerd."))
    .catch(err => console.log(err));

//Start server
app.listen(PORT, function () {
    console.log(`==> API Server now listening on PORT ${PORT}!`);
});
