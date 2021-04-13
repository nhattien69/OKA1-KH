var express = require("express");
var app = express();

var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://builamnhattien:nhattien69999@cluster0.qr7vk.mongodb.net/Profile?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},function(err){
    if(err){
        console.log("Mongoose connected err:" +err)
    }else
    {
        console.log("Mongoose connected successfully")
    }
});

var server = require("http").Server(app);
server.listen(process.env.PORT || 3000);
require("./routes")(app);
