'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.userlist);
        return list.recordset;
    }catch (error) {
        return error.send({message:"not found"});
    }
}


const getUserById = async (userId) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneUser = await pool.request()
                        .input('userId',sql.Int,userId)
                        .query(sqlQueries.userbyid);
        return oneUser.recordset;
    }catch (error) {
        return error.message;
    }
}

const createUser = async (userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertUser = await pool.request()
                            .input('username',sql.NVarChar(50), userData.username)
                            .input('pass', sql.NVarChar(50), userData.pass)
                            .query(sqlQueries.createUser);
        return insertUser.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateUser = async (userId,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('userId',sql.Int,userId)
                        .input('username',sql.NVarChar(50),userData.username)
                        .input('pass', sql.NVarChar(50), userData.pass)
                        .query(sqlQueries.updateUser)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const deleteUser = async (userId) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleted = await pool.request()
                        .input('userId',sql.NVarChar(50),userId)
                        .query(sqlQueries.deleteUser);
        return deleted.recordset;
    }catch (error) {
        return error.message;
    }
}


const getProfiles = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.profileslist);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const getProfileByName = async (TenNguoiDung) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request()
                    .input('TenNguoiDung',sql.NVarChar(50),TenNguoiDung)
                    .query(sqlQueries.profilebyid);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateProfile = async (userId,profileData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('userId',sql.Int,userId)
                        .input('TenNguoiDung',sql.NVarChar(50),profileData.TenNguoiDung)
                        .input('SoDienThoai',sql.VarChar(50),profileData.SoDienThoai)
                        .input("CMND",sql.VarChar(50),profileData.CMND)
                        .input("Email",sql.VarChar(50),profileData.Email)
                        .input("TheNganHang",sql.VarChar(50),profileData.TheNganHang)
                        .query(sqlQueries.updateProfile)
        return update.recordset;                
    }catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getProfiles,
    getProfileByName,
    updateProfile
}