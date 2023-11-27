const studioProduction = require("express").Router();
const dbConn = require('../database');
const multer = require('multer')
const path = require('path')
const fs = require('fs');


const storage = multer.diskStorage({
    destination : (req, file, callBack) =>{
        callBack(null, './public/studioProduction')
    },
    filename : (req,file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage  : storage
})


studioProduction.post('/save',upload.single('file'), (req,res) => {
    const some = req.body;
    console.log(some)
    // const full_name = req.body.full_name;
    // const user_name = req.body.user_name;
    // const password = req.body.password;
    // const directorate = req.body.directorate;
    // const role = req.body.role;
    // const sex = req.body.sex;
    // const active = 0;
    
    // const sql = "INSERT INTO user (full_name, user_name, sex, role_id_fk, directorate_id_fk, active, profile_picture, password) VALUES( ? )"
    // const values = [full_name, user_name, sex, role,directorate, active, image, hash];

    // dbConn.query(sql, [values], function(err, result){
    //     if(err) throw err;
    //     else {
    //         res.json("saved")
    //     }
    // })
   
    
})


module.exports = studioProduction;