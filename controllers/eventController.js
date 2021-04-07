'use strict';

const eventData = require('../data/events');

const getUsers = async (req, res, next) => {
    try{
        const events = await eventData.getUsers();
        res.send(events);
    }catch (error) {
        res.status(400).send(error.message);
    }
}


const getOneUser = async (req,res,next) => {
    try{
        const username = req.params.id;
        const oneuser = await eventData.getById(username);
        res.send(oneuser);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try{
        const data = req.body;
        const created = await eventData.createUser(data);
        res.send(created);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body;
        const updated = await eventData.updateUser(userId,data);
        res.send(updated);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const deleted = await eventData.deleteUser(userId);
        res.send(deleted);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getProfiles = async (req, res, next) => {
    try{
        const events = await eventData.getProfiles();
        res.send(events);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneProfile = async (req, res, next) => {
    try{
        const TenNguoiDung = req.params.ten;
        const oneprofile = await eventData.getProfile(TenNguoiDung);
        res.send(oneprofile);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProfile = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body;
        const updated = await eventData.updateProfile(userId,data);
        res.send(updated);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser,
    getProfiles,
    getOneProfile,
    updateProfile
}