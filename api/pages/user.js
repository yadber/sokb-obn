const user = require("express").Router();
const dbConn = require('../database');
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination : (req, file, callBack) =>{
        callBack(null, '../public/profile')
    },
    filename : (req,res, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage  : storage
})


// login section 
user.post('/login', (req, res, next)=>{
    const user_name = req.body.user_name;
    const password = req.body.password;
    const sql ='SELECT * FROM user WHERE user_name = ? AND password = ?';
    dbConn.query(sql,[user_name,password], function(error, data){
        if(error) throw error;
        if(data.length > 0){
            if(data[0].active === 1){
                return res.send(data)
            }else{
                return res.json("Not Active")
            }
        }else{
            return res.json("Error");
        }
    })

})

// sign up section 

user.post('/register',  (req,res) => {
    console.log(req);
})


// directorate section
user.get('/directorate', (req,res,next) =>{
    const sql = "select * from list_directorate"

    dbConn.query(sql, function(error, data){
        if(error) throw error;
        else{
            return res.send(data);
        }
    })
})




// role section
user.get('/role', (req,res,next) =>{
    const sql = "select * from list_role"

    dbConn.query(sql, function(error, data){
        if(error) throw error;
        else{
            return res.send(data);
        }
    })
})
module.exports = user;