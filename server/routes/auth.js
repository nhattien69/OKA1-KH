'use strict'
const routers = require('express').Router();
const User = require('../data/user/user')
const {registerValidation,loginValidation} = require('../validate');
const bcryptjs = require('bcryptjs');

routers.get('/user', async(req,res)=>{
    try{
        const user = await User.find({});
        res.send({users: user});
    }catch(err){
        res.status(400).send(err);
    }
});

routers.post('/register',async(req,res)=>{
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const userExist = await User.findOne({username: req.body.username});
    if(userExist) return res.status(400).send('User already exist');

    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(req.body.password,salt);

    const user = new User({
        username: req.body.username,
        password: hashedPass
    });
    try{
        const saveUser = await user.save();
        res.send({account: saveUser});
    }catch(err){
        res.status(400).send(err);
    }
});

routers.post('/login',async(req,res)=>{
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('User not found ');
    const validPass = await bcryptjs.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password')
    res.send('Logged in');
});

module.exports = {
    routes:routers
}