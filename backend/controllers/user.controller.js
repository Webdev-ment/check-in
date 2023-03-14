const User = require('../models/user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginUser =  (req, res, next) =>{
    //console.log(req.body);
    User.find({userEmail: req.body.userEmail}).exec()
        .then(user => {
            console.log(user);
            if(user <= 1){
                return res.status(401).json({
                    message: "Email or password is incorrect"
                })
            }else{

                bcrypt.hash(req.body.userPassword, 10, (err, hash) => {
                    if(err){
                        return res.status(500).json({
                            error: err
                        });
                    }else{
                        //console.log(hash)
                        //console.log(user);
                        bcrypt.compare(req.body.userPassword, user[0].userPassword, (err, result) => {
                            console.log(user[0].userPassword);
                            if(err){
                                // console.log('compared error');
                                return res.status(401).json({
                                    message: "Email or password is incorrect"
                                });
                            }
                            if(result){
                                //console.log(user[0]);
                                //console.log('------------------------');
                                //console.log(result);
                                const token = jwt.sign({
                                        email: user[0].userEmail,
                                        userId: user[0]._id,

                                    }, process.env.JWTKEY
                                    /*{
                                        expiresIn: '1h'
                                    }*/);
                                return res.status(200).json({
                                    message: 'User successfully logged in.',
                                    token: token,
                                    user: {

                                        email: user[0].userEmail,
                                        name: user[0].FirstName + ' ' + user[0].LastName
                                    }
                                })
                            }
                            res.status(401).json({
                                message: "Email or password is incorrect here"
                            });
                        });
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
};

exports.registerUser = (req, res, next) => {
    console.log(req.body);
    User.find({
        email: req.body.userEmail
    }).exec()
        .then(user => {
            if(user.length >= 1 ){
                return res.status(409).json({
                    message: "This email already is used"
                })
            }else{
                bcrypt.hash(req.body.userPassword, 10, (err, hash) => {
                    if(err){
                        return res.status(500).json({
                            error: err
                        })
                    }else{

                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            firstName: req.body.FirstName,
                            lastName: req.body.LastName,
                            userPassword: hash,
                            userEmail: req.body.userEmail

                            //projectAssociation: []
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User successfully created',
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err,
                                    message: 'fail'
                                });
                            });
                    }
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });



};
