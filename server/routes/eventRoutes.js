'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router()
const {getUsers,getOneUser,addUser, updateUser,deleteUser,
        getProfiles,getOneProfile,updateProfile} = eventController;

router.get('/users' , getUsers);
router.get('/user/name_use=:id',getOneUser);
router.post('/users',addUser);
router.put('/users/num_id=:id',updateUser);
router.delete('/users/num_id=:id',deleteUser);
router.get('/profiles',getProfiles);
router.get('/profiles/name_pro=:ten',getOneProfile);
router.put('/profiles/num_id=:id',updateProfile);

module.exports = {
    routes: router,
}