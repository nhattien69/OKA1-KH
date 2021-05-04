'use strict'
const routers = require('express').Router();
const Admin = require('../data/user/admin')

routers.post('/admin/register',async(req,res)=>{
    const adminExist = await Admin.findOne({username: req.body.username});
    if(adminExist) return res.status(400).send('Admin already exist ');
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    });
    try{
        const saveAdmin = await admin.save();
        res.send({account: saveAdmin});
    }catch(err){
        res.status(400).send(err);
    }
});


routers.post('/admin/login',async(req,res)=>{
    const admin = await Admin.findOne({username: req.body.username});
    if(!admin) return res.status(400).send('Admin not found ');
    const validPass = await Admin.findOne({password: req.body.password});
    if(!validPass) return res.status(400).send('Invalid password');
    res.send('Logged in');
});

module.exports = {
    routes:routers
}