const db = require("../models");
const bcrypt = require('bcryptjs');
require('dotenv').config();
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')


module.exports = {
    // @route POST api/auth
    // @desc Auth user
    // @access Public
    findOne: function (req, res) {
        console.log("authController")
        const { username, password } = req.body;

        //simple validation
        if (!username || !password) {
            return res.status(400).json({ msg: "please complete all fields" });
        }

        //check for existing user
        db.User.findOne({ username })
            .then(user => {
                if (!user) return res.status(400).json({ msg: 'user does not exist' });

                //validate password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
                        //sign token
                        jwt.sign(
                            { id: user.id },
                            config.get('jwtSecret'),
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        username: user.username,
                                        email: user.email
                                    }
                                })
                            })
                    })
            })
    },
    // @route GET api/auth/user
    // @desc Get user data
    // @access Private
    findById: function (req, res) {
        db.User.findById(req.user.id)
            .select('-password')
            .then(user => res.json(user));
    },
};












 //====================================================
    // register new user
    //====================================================
    //   create: function (req, res) {
    //     const { username, email, password } = req.body;

    //     //simple validation
    //     if (!username || !email || !password) {
    //       return res.status(400).json({ msg: "please complete all fields" });
    //     }

    //     //check for existing user
    //     db.User.findOne({ email })
    //       .then(user => {
    //         if (user) return res.status(400).json({ msg: 'user already exists' });

    //         const newUser = new db.User({
    //           username,
    //           email,
    //           password
    //         });

    //         //create salt and hash
    //         bcrypt.genSalt(10, (err, salt) => {
    //           bcrypt.hash(newUser.password, salt, (err, hash) => {
    //             if (err) throw err;
    //             newUser.password = hash;
    //             newUser.save()
    //               .then(user => {

    //                 jwt.sign(
    //                   { id: user.id },
    //                   config.get('jwtSecret'),
    //                   { expiresIn: 3600 },
    //                   (err, token) => {
    //                     if (err) throw err;
    //                     res.json({
    //                       token,
    //                       user: {
    //                         id: user.id,
    //                         username: user.username,
    //                         email: user.email
    //                       }
    //                     })
    //                   })


    //               })
    //           })
    //         })
    //       })
    //     // db.User
    //     //   .create(req.body)
    //     //   .then(dbModel => res.json(dbModel))
    //     //   .catch(err => res.status(422).json(err));
    //   },
    //   update: function (req, res) {
    //     db.User
    //       .findOneAndUpdate({ _id: req.params.id }, req.body)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
    //   remove: function (req, res) {
    //     db.User
    //       .findById({ _id: req.params.id })
    //       .then(dbModel => dbModel.remove())
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   }
