const user = require("express").Router();
const dbConn = require('../database');
const multer = require('multer')
const path = require('path')
const fs = require('fs');
const bcrypt = require("bcrypt")

const storage = multer.diskStorage({
    destination : (req, file, callBack) =>{
        callBack(null, './public/profile')
    },
    filename : (req,file, callBack) => {
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

    // bcrypt
    // .hash(password, 10)
    // .then(hash => {
    //    console.log(hash)
    // }).catch(err => console.error(err))


    const sql ='SELECT * FROM user WHERE user_name = ?';
    dbConn.query(sql,[user_name], function(error, data){
        if(error) throw error;
        if(data.length > 0){
            if(data[0].active === 1){
                const userHash = data[0].password;
                 bcrypt
                    .compare(password, userHash)
                    .then(result => {
                        if(result){
                            return res.send(data);
                        }else{
                            return res.json("Error")
                        }
                    })
                    .catch(err => console.error(err))
    
                // return res.send(data)
            }else{
                return res.json("Not Active")
            }
        }else{
            return res.json("Error");
        }
    })

})



// sign up section upload.single('image')
user.post('/register',upload.single('image'), (req,res) => {
    const image = req.file.filename;
    const full_name = req.body.full_name;
    const user_name = req.body.user_name;
    const password = req.body.password;
    const directorate = req.body.directorate;
    const role = req.body.role;
    const sex = req.body.sex;
    const active = 0;
    
    bcrypt
        .hash(password, 10)
        .then(hash => {
           sendUserHash(hash)
        }).catch(err => console.error(err))

   function sendUserHash(hash){
        const sql = "INSERT INTO user (full_name, user_name, sex, role_id_fk, directorate_id_fk, active, profile_picture, password) VALUES( ? )"

        const values = [full_name, user_name, sex, role,directorate, active, image, hash];

        dbConn.query(sql, [values], function(err, result){
            if(err) throw err;
            else {
                res.json("saved")
            }
        })
   }
    
})

user.post('/checkStepOne', (req,res) => {
   
    const full_name = req.body.full_name;
    const user_name = req.body.user_name;
    const password = req.body.password;
    console.log(password);

    // checking if the user_name already exist
    const sql = "SELECT * FROM user WHERE user_name = ?";
    dbConn.query(sql,[user_name],function(err,data){
        if(err) return res.json("error!!");
        if(data.length > 0){
            return res.json("UserName");
        }else{
            const sql = "SELECT * FROM user WHERE full_name = ?";
            dbConn.query(sql, [full_name], function(err,data){
                if(err) return res.json("error!!");
                if(data.length > 0){
                    return res.json("FullName")
                }else{
                    return res.json("AllGood");
                }
            })
        }
    })
    
  
    
})

// view image section
// app.get('/images/:imageName', (req, res) => {
//     // do a bunch of if statements to make sure the user is 
//     // authorized to view this image, then
  
//     const imageName = req.params.imageName
//     const readStream = fs.createReadStream(`images/${imageName}`)
//     readStream.pipe(res)
// })


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