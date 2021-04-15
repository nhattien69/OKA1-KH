'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router()
const {getUsers,getOneUser,addUser, updateUser,deleteUser,
        getProfiles,getOneProfile,updateProfile} = eventController;

router.get('/users' , getUsers);
router.get('/user/num_id=:id',getOneUser);
router.post('/user',addUser);
router.put('/user/num_id=:id',updateUser);
router.delete('/user/num_id=:id',deleteUser);
router.get('/profiles',getProfiles);
router.get('/profile/name_pro=:name',getOneProfile);
router.put('/profile/num_id=:id',updateProfile);

module.exports = {
    routes: router,
}