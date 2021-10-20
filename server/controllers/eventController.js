'use strict';

const { response } = require('express');
const eventData = require('../data/events');
const { loginValidation } = require('../validate');
const jwt = require('jsonwebtoken')
const resolveToken = require('../Common/resolveToken');
//const DateTime = require('node-datetime/src/datetime');
var dateTime = require('node-datetime');

function verifyJwtToken(token, secretKey){
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return reject(err);
        }
        resolve(decoded);
        });
    });
} 

const authUser = async (req, res, next) => {
    try{
        const data = req.body;
        const auth = await eventData.authUser(data);
        const userId = auth[0]?.userId || '';
        if(auth!=0){
            const token = await resolveToken.generateToken({
                auth: auth
            },"secretkey",86400);
            const refreshToken = await resolveToken.generateToken({
                auth: auth
            },"secretkey",259200);
                              
            const response = {
                status: 'SUCCES', // biểu thị cho việc lấy hoặc thay đổi data thành công
                message: "Đăng nhập thành công",
                error: null, // error: { error_code: 'ERR_USER_001', message: "sai mật khẩu" }
                data: {
                    userId: userId,
                    token: token,
                    refreshToken: refreshToken
                }
            }
            res.json(response);
        }else{
            res.status(404).send("Login fail");
        }

    }catch (error) {
        res.status(400).send(error.message);
    }
}


const authAdmin = async (req, res, next) => {
    try{
        const data = req.body;
        const auth = await eventData.authAdmin(data);
        const partner = await eventData.getPartners();
        const user = await eventData.getUsers();
        console.log(auth[0].adminId)
        if (auth != 0)
        {
            const token = await resolveToken.generateToken({
                adminId: auth[0].adminId
            },"secretkey",86400);
            const refreshToken = await  resolveToken.generateToken({
                auth: auth
            },"secretkey",259200)                
              const response = {
                data,
                status: 'SUCCES',
                message: 'Đăng nhập thành công',
                error: null,
                token
              }
              res.json(response);
        }
        else return res.status(404).send("Login fail")
    }catch (error) {
        res.status(400).send(error.message);
    }
}


const addAdmin = async (req, res, next) => {
    try{
        const data = req.body;
        const adminUsername = req.body.adminUsername
        if(adminUsername=="") return res.status(401).send("Username can not be null")
        const adminPass = req.body.adminPass
        if(adminPass=="") return res.status(401).send("Password can not be null")
        const created = await eventData.createAdmin(data);
        const response = {
            status: 'SUCCES',
            message: 'thêm tài khoản thành công',
            error: null,
            created
          }
          return res.json(response);
    }catch (error) {
        res.status(401).send("Fail to create user, check if Username is being used");
    }
}

const authPartner = async (req, res, next) => {
    try{
        const data = req.body;
        const rolePartner = await eventData.authPartner(data);
        const partnerId = rolePartner[0]?.partnerId || '';
        const user = await eventData.getUser_Partner();
        if (rolePartner != 0)
        {
            const token = await resolveToken.generateToken({
                rolePartner
            },"secretkey",86400);
            const refreshToken = await  resolveToken.generateToken({
                rolePartner
            },"secretkey",259200)          
              const response = {
                data,
                partnerId: partnerId,
                status: 'SUCCES',
                message: 'Đăng nhập thành công',
                error: null,
                token,
                refreshToken
              }
              res.json(response);
        }
        else return res.status(404).send("Login fail")

    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addPartner = async (req, res, next) => {
    try{
        const data = req.body;
        const partnerUsername = req.body.partnerUsername
        if(partnerUsername=="") return res.status(404).send("Username can not be null")
        const partnerPass = req.body.partnerPass
        if(partnerPass=="") return res.status(404).send("Password can not be null")
        const created = await eventData.createPartner(data);
        const response = {
            status: 'SUCCES',
            message: 'thêm tài khoản thành công',
            error: null,
            created
          }
          return res.json(response);
    }catch (error) {
        res.status(404).send("Fail to create user, check if Username is being used");
    }
}


const refToken = async (req, res, next) => {
    const refreshToken = req?.headers['authorization'] || '';
    try{
        const resolveTokenUser = await resolveToken.verifyToken(refreshToken,"secretkey");
        const data = resolveTokenUser.data
        const token = await resolveToken.generateToken({
            data
        },"secretkey",900);
        const response = {
            data,
            status: 'SUCCES',
            message: 'refreshToken thành công',
            error: null,
            token
          }
          res.json(response);
    }catch(err){
        res.send({result: -1, errMsg: 'Invalid refresh token', err: err})
    }
}

const getUsers = async (req, res, next) => {
    try{
        const events = await eventData.getUsers();
        res.send({
            Users: events
        });
        
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getPartners = async (req, res, next) => {
    try{
        const events = await eventData.getPartners();
        res.send({
            Partner: events
        });
        
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const countUser = async (req, res, next) => {
    try{
        const events = await eventData.countUser();
        res.send({
            count: events
        });
        
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const countAllUser = async (req, res, next) => {
    try{
        const events = await eventData.countAllUser();
        res.send({
            count: events
        });
        
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneUser = async (req,res,next) => {
    try{
        const id = req.params.id;
        const oneuser = await eventData.getUserById(id);
        if (oneuser != 0 && req.params.id) return res.send(oneuser);
        else if (req.params.id == null) res.send("not found");
        else return res.send("not found");
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneUserbyEmail = async (req,res,next) => {
    try{
        const email = req.params.email;
        const oneuser = await eventData.getUserByMail(email);
        const response = {
            user: oneuser
          }
        if (oneuser != 0 && req.params.email) return res.send(response);
        else if (req.params.email == null) res.send("not found1");
        else return res.send("not found");
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getOnePartnerbyEmail = async (req,res,next) => {
    try{
        const partnerUsername = req.params.partnerUsername;
        const onepartner = await eventData.getPartnerByMail(partnerUsername);
        const response = {
            partner: onepartner
          }
        if (onepartner != 0 && req.params.partnerUsername) return res.send(response);
        else if (req.params.partnerUsername == null) res.send("not found1");
        else return res.send("not found");
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try{
        const data = req.body;
        const email = req.body.email
        if(email=="") return res.status(401).send("Email can not be null")
        const pass = req.body.pass
        if(pass=="") return res.status(401).send("Password can not be null")
        const created = await eventData.createUser(data);
        const response = {
            status: 'SUCCES',
            message: 'thêm tài khoản thành công',
            error: null,
            created
          }
          return res.json(response);
    }catch (error) {
        //res.status(401).send("Fail to create user, check if Email is being used");
        res.status(401).send(error);
    }
}

const addUserAll = async (req, res, next) => {
    try{
        const data = req.body;
        const email = req.body.email
        if(email=="") return res.status(401).send("Email can not be null")
        const pass = req.body.pass
        if(pass=="") return res.status(401).send("Password can not be null")
        const fristName = req.body.fristName
        if(fristName=="") return res.status(401).send("fristName can not be null")
        const lastName = req.body.lastName
        if(lastName=="") return res.status(401).send("lastName can not be null")
        const phone = req.body.phone
        if(phone=="") return res.status(401).send("phone can not be null")
        const userAddress = req.body.userAddress
        if(userAddress=="") return res.status(401).send("userAddress can not be null")
        const cards = req.body.cards
        if(cards=="") return res.status(401).send("cards can not be null")
        const created = await eventData.createUserAll(data);
        const response = {
            status: 'SUCCES',
            message: 'thêm tài khoản thành công',
            error: null,
            created
          }
          return res.json(response);
    }catch (error) {
        res.status(401).send("Fail to create user, check if Email is being used");
    }
}

const updateUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body;      
        const updated = await eventData.updateUser(userId,data);
        const response = {
            status: 'SUCCES',
            updated
        }
        res.send(response);
    }catch (error) {
        res.status(401).send(error.message);
    }
}

const updatePhoneUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body;      
        const updated = await eventData.updatePhone(userId,data);
        const response = {
            status: 'SUCCES',
            updated
        }
        res.send(response);
    }catch (error) {
        res.status(401).send(error.message);
    }
}

const updateNotelUser = async (req, res, next) => {
    try{
        const email = req.params.email;
        const data = req.body;      
        const updated = await eventData.updateNote(email,data);
        const response = {
            status: 'SUCCES',
            updated
        }
        res.send(response);
    }catch (error) {
        res.status(401).send(error.message);
    }
}

const updateAddressUser = async (req, res, next) => {
    try{
        const email = req.params.email;
        const data = req.body;      
        const updated = await eventData.updateAddress(email,data);
        const response = {
            status: 'SUCCES',
            updated
        }
        res.send(response);
    }catch (error) {
        res.status(401).send(error.message);
    }
}

const updateCardUser = async (req, res, next) => {
    try{
        const email = req.params.email;
        const data = req.body;      
        const updated = await eventData.updateCard(email,data);
        const response = {
            status: 'SUCCES',
            updated
        }
        res.send(response);
    }catch (error) {
        res.status(401).send(error.message);
    }
}

const updatePasswordUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body;      
        const pass = req.body.pass
        const repass = req.body.repass
        if(pass=="") return res.status(401).send("Password can not be null")
        if(pass!=repass) return res.status(401).send("Password not match")
        const updated = await eventData.updatePasswordUser(userId,data);
        const response = {
            status: 'SUCCES',
            updated
        }        
        res.send(response);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const deleted = await eventData.deleteUser(userId);
        console.log(deleted)
        if(deleted==0) return res.send("Delete success");
        else return res.send("Id user not exist");
    }catch (error) {
        res.status(400).send(error.message);
    }
}

//get point
const getpointUser = async (req, res, next) => {
    try{
        const events = await eventData.getPointUser();
        res.send({
            Users: events
        });
        
    }catch (error) {
        res.status(400).send(error.message);
    }
}
//
const getProfileUser = async (req, res, next) => {
    const token = req?.headers['authorization'] || '';
    if(token){
        try{
            const resolveTokenUser = await resolveToken.verifyToken(token);
            if(resolveTokenUser.data){
                res.json({
                    status: 'SUCCES',
                    message: 'lấy thông tin user thành công',
                    error: null,
                    data: resolveTokenUser.data
                })
            }
        }catch(err){
            res.json({
                status: 'FAIL',
                message: 'lấy thông tin user thất bại',
                errMsg: err
            })
        }
    }else{
        res.json({
            status: 'FAIL',
            message: 'không thấy token truyền vào'
        })
    }

    
}
const updatePointUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body; 
        const updated = await eventData.updatePointUser(userId,data);
        const response = {
            status: 'SUCCES',
            updated
        }
        res.send(response);
    }catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports = {
    getUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser,
    authUser,
    authAdmin,
    authPartner,refToken,
    getpointUser,
    addAdmin,addPartner,
    updatePasswordUser,
    getProfileUser,
    updatePhoneUser,
    getPartners,
    updatePointUser,
    addUserAll,
    getOneUserbyEmail,
    updateNotelUser,updateAddressUser,updateCardUser,
    getOnePartnerbyEmail,
    countUser,countAllUser
}