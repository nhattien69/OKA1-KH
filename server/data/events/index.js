'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const { response } = require('express');
const { date } = require('@hapi/joi');
const dateTime = require('node-datetime');
const DateTime = require('node-datetime/src/datetime');

const configSQL = {
    user: 'oka1kh',
    password: 'Nhattien69999',
    server: 'oka1kh.database.windows.net', 
    database: 'PROFILE_DB',
    port: 1433
};

sql.connect(configSQL, function (err) {

    if (err) console.log("err SQL", err);
    else {
        console.log("Connect Success");
    }
    
});

const authUser = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const auth = await pool.request()
                                .input('email',sql.NVarChar(50),data.email)
                                .input('pass',sql.NVarChar(50),data.pass)
                                .query(sqlQueries.authUser);
        return auth.recordset;
    }catch (error) {
        return error.message;
    }
}

const authAdmin = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const auth = await pool.request()
                                .input('adminUsername',sql.NVarChar(50),data.adminUsername)
                                .input('adminPass',sql.NVarChar(50),data.adminPass)
                                .query(sqlQueries.authAdmin);
        return auth.recordset;
    }catch (error) {
        return error.message;
    }
}

const createAdmin = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const auth = await pool.request()
                                .input('adminUsername',sql.NVarChar(50),data.adminUsername)
                                .input('adminPass',sql.NVarChar(50),data.adminPass)
                                .query(sqlQueries.createAdmin);
        return auth.recordset;
    }catch (error) {
        return error.message;
    }
}


const authPartner = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const auth = await pool.request()
                                .input('partnerUsername',sql.NVarChar(50),data.partnerUsername)
                                .input('partnerPass',sql.NVarChar(50),data.partnerPass)
                                .query(sqlQueries.authPartner);
        return auth.recordset;
    }catch (error) {
        return error.message;
    }
}

const createPartner = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const auth = await pool.request()
                                .input('partnerUsername',sql.NVarChar(50),data.partnerUsername)
                                .input('partnerPass',sql.NVarChar(50),data.partnerPass)
                                .input('partnerRole',sql.NVarChar(50),data.partnerRole)
                                .query(sqlQueries.createPartner);
        return auth.recordset;
    }catch (error) {
        return error.message;
    }
}

const getUser_Partner = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.listUser_Partner);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const getPartners = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.listPartner);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.listUser);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const countUser = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.countUser);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const countAllUser = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.countAllUser);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const getUserById = async (userId) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneUser = await pool.request()
                        .input('userId',sql.NVarChar(50),userId)
                        .query(sqlQueries.userbyid);
        return oneUser.recordset;
    }catch (error) {
        return error.message;
    }
}

const getUserByMail = async (email) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneUser = await pool.request()
                        .input('email',sql.NVarChar(50),email)
                        .query(sqlQueries.getUserId);
        return oneUser.recordset;
    }catch (error) {
        return error.message;
    }
}

const getPartnerByMail = async (partnerUsername) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneUser = await pool.request()
                        .input('partnerUsername',sql.NVarChar(50),partnerUsername)
                        .query(sqlQueries.getPartnerEmail);
        return oneUser.recordset;
    }catch (error) {
        return error.message;
    }
}

const createUser = async (userData) => {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        //dt = Date.now();
        const insertUser = await pool.request()
                            .input('email',sql.NVarChar(50), userData.email)
                            .input('pass', sql.NVarChar(50), userData.pass)
                            //.input('dateCreate',sql.Date,Date.now())
                            .query(sqlQueries.createUser);
        return insertUser.recordset;
}

const createUserAll = async (userData) => {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('events');
    const insertUser = await pool.request()
                        .input('email',sql.NVarChar(50), userData.email) 
                        .input('pass', sql.NVarChar(50), userData.pass)
                        .input('fristName',sql.NVarChar(50),userData.fristName)
                        .input('lastName',sql.NVarChar(50),userData.lastName) 
                        .input('phone',sql.NVarChar(50),userData.phone)
                        .input('userAddress', sql.NVarChar(sql.MAX), userData.userAddress)
                        .input('cards', sql.NVarChar(50), userData.cards)
                        //.input('dateCreate',sql.date(),date.now())
                        .query(sqlQueries.createUserAll);
    return insertUser.recordset;
}

const updateUser = async (userId,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('userId',sql.Int,userId)                    
                        .input('fristName',sql.NVarChar(50),userData.fristName)
                        .input('lastName',sql.NVarChar(50),userData.lastName)                 
                        .query(sqlQueries.updateUser)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const updatePhone = async (userId,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('userId',sql.Int,userId)                    
                        .input('phone',sql.NVarChar(50),userData.phone)                
                        .query(sqlQueries.updatePhone)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateNote = async (email,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('email',sql.NVarChar(50),email)                    
                        .input('note',sql.NVarChar(50),userData.note)                
                        .query(sqlQueries.updateNote)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateAddress = async (email,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('email',sql.NVarChar(50),email)                    
                        .input('userAddress',sql.NVarChar(sql.MAX),userData.userAddress)                
                        .query(sqlQueries.updateAddress)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateCard = async (email,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('email',sql.NVarChar(50),email)                   
                        .input('cards',sql.NVarChar(50),userData.cards)                
                        .query(sqlQueries.updateCard)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const updatePasswordUser = async (userId,userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('userId',sql.Int,userId)
                        .input('pass', sql.NVarChar(50), userData.pass)                  
                        .query(sqlQueries.updatePasswordUser)
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

const getPointUser = async (userId) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const pointUser = await pool.request()
                        .input('userId',sql.NVarChar(50),userId)
                        .query(sqlQueries.pointUser);
        return pointUser.recordset;
    }catch (error) {
        return error.message;
    }
}

const updatePointUser = async (userId,data) => {
    try{
        let pool = await sql.connect(config.sql);
        const datetime = dateTime.create();  
        var dt = datetime.format('Y-m-d H:M:S'); 
        const sqlQueries = await utils.loadSqlQueries('events');
        const pointUser = await pool.request()
                        .input('userId',sql.NVarChar(50),userId)
                        .input('point',sql.Int,data.point)
                        .input('day_Point',sql.DateTime,dt)
                        .query(sqlQueries.updatePoint);
        return pointUser.recordset;
    }catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    getUserById,
    getPartners,
    createUser,
    updateUser,
    deleteUser,
    authUser,
    authAdmin,
    authPartner,
    getUser_Partner,
    getPointUser,
    createAdmin,
    createPartner,
    updatePasswordUser,
    updatePhone,
    updatePointUser,
    createUserAll,
    getUserByMail,
    updateNote,updateAddress,updateCard,
    getPartnerByMail,
    countUser,countAllUser
}