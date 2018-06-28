var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

// route http://x.x.x.x/user/
router.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the user API'
    });
});

// Signup
router.get('/signup', function(req, res){
    res.json({
        message: 'signup'
      });
});


router.post('/signup', function(req, res){
    var message;

    if(!req.body.username || !req.body.password || !req.body.email || !req.body.firstname || !req.body.lastname){
        message = "All fields required";
        res.status(400);
        res.json({ message: message });
        
    } else {
        var userInfo = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        };

        User.findOne({ username: userInfo.username }, function(err, user){
            if(err) {
                console.log(err);
            }
            else if(user) {
                message = "user exists";
                res.json({ message: message });
            } else {
                User.create(userInfo, function(err, newUser) {
                    if(err) 
                    {
                        return next(err);
                    }
                    else {
                        message = "user registered";
                        res.json({ message: message });
                    }
                });    
            } 
        });
    }
});

// Login
router.get('/login', function(req, res){
    res.json({
        message: 'Login'
      });
});
    

router.post('/login', function(req, res, next){

    if(req.body.username && req.body.password){
        User.authenticate(req.body.username, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                jwt.sign({ user }, 'secretkey', { expiresIn: '10h' }, (err, token) => {
                    let infoUser = {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        tokenUser: token
                    };
                    res.json({infoUser});
                });
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
});


// Logout
router.post('/logout', function (req, res, next) {
        message = "logout ok";
        res.json({ message: message });                  
});


//export this router to use in server.js
module.exports = router;