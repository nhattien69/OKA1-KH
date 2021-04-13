const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:       String ,
    pass:           String, 

    TenNguoiDung:   String,
    SoDienThoai:    String,
    Email:          String,
    CMND:           String,
    TheNganHang:    String,

});

module.exports= mongoose.model("User", userSchema);