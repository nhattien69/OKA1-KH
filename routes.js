const User = require("./models/user");

module.exports = function(app){
    //getuser
    app.get("/api/getuser",function(req,res){
        User.find(function(err,data){
            if(err){
                res.json({result:0, errMsg: err})
            }else{
                res.json({result:1, danhsach: data})
            }
        })
    });
    
    //getoneuser
    app.get("/api/getoneuser/:username",function(req,res){
        User.findOne({username:req.params.username},function(err,data){
            if(err){
                res.json({result:0, errMsg: err})
            }else{
                if(data){
                    res.json({result:1, user: data})
                }else{
                    res.json({result:0, errMsg: "Không tim thấy người dùng"})
                }
            }
        })
    })

    //adduser
    app.post("/api/adduser",function(req,res){
        User.findOne({username:req.body.username},function(err,user){
            if(err){
                res.send({result:0, errMsg: err})
            }else{
                if(!user){
                        var newUser = new User({
                        username:       req.body.username,
                        pass:           req.body.pass,
                        TenNguoiDung:   req.body.TenNguoiDung,
                        SoDienThoai:    req.body.SoDienThoai,
                        Email:          req.body.Email,
                        CMND:           req.body.CMND,
                        TheNganHang:    req.body.TheNganHang
                    });
                    newUser.save(function(err){
                        if(err){
                            res.json({result:0, errMsg: err})
                        }else{
                            res.json({result:1})
                        }
                    })
                }else{
                    res.json({result: 0, errMsg: "tai khoan da ton tai"});
                }
            }
        })
    });

    //updateuser
    app.post("/api/updateuser",function(req,res){
        User.findOne({username:req.body.username},function(err,user){
            if(err){
                res.json({result:0, errMsg: err})
            }else{
                if(user){
                    User.findOneAndUpdate({username:req.body.username},{
                        pass:           req.body.pass,
                        TenNguoiDung:   req.body.TenNguoiDung,
                        SoDienThoai:    req.body.SoDienThoai,
                        Email:          req.body.Email,
                        CMND:           req.body.CMND,
                        TheNganHang:    req.body.TheNganHang
                    },function(err){
                        if(err){
                            res.json({result:0, errMsg: err })
                        }else{
                            res.json({result:1})
                        }
                    })
                    
                }else{
                    res.json({result:0, errMsg: "Không tim thấy người dùng"})
                }
                
            }
        })
    })
}