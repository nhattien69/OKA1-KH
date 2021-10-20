'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router()
const {getUsers,getOneUser,addUser, updateUser,deleteUser,
        authUser,authAdmin,authPartner,getProfileUser,refToken, getpointUser,addAdmin,addPartner,updatePasswordUser} = eventController;
const jwt = require('jsonwebtoken');

//user
router.post('/user/login',authUser);
router.post('/user',addUser);
router.post('/adduserall',eventController.addUserAll);
router.get('/users',getUsers);
router.get('/user/:id',getOneUser);
router.get('/userbyemail/:email',eventController.getOneUserbyEmail)
router.get('/profiles' ,getProfileUser);
router.patch('/user/change_pass/:id',updatePasswordUser);
router.patch('/user/change_name/:id',updateUser);
router.patch('/user/change_phone/:id',eventController.updatePhoneUser);
router.post('/user/update_point/:id', eventController.updatePointUser);
router.post('/user/update_note/:email', eventController.updateNotelUser);
router.post('/user/update_address/:email', eventController.updateAddressUser);
router.post('/user/update_card/:email', eventController.updateCardUser);
router.delete('/user/:id',deleteUser);
router.post('/reftoken',refToken)
router.get('/point',getpointUser)
router.get('/countuser',eventController.countUser)
router.get('/countalluser',eventController.countAllUser)
//admin
router.post('/admin/login',authAdmin);
router.post('/admin',addAdmin);
//partner
router.post('/partner/login',authPartner);
router.post('/partner',addPartner);
router.get('/partners',eventController.getPartners);
router.get('/partnerbyemail/:partnerUsername',eventController.getOnePartnerbyEmail)

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