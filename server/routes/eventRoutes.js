'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router()
const {getUsers,getOneUser,addUser, updateUser,deleteUser,
        authUser,authAdmin,authPartner,readToken,refToken} = eventController;
const jwt = require('jsonwebtoken');


router.post('/user/login',authUser);
router.post('/admin/login',authAdmin);
router.post('/partner/login',authPartner);
router.get('/user/:id',getOneUser);
router.post('/users',addUser);
router.patch('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.post('/reftoken',refToken)

router.post('/profiles' ,readToken);

function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        next()
    }else {
        res.send(401)
    }
}


module.exports = {
    routes: router,
}