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

user.put('/register/:id', (req,res) =>{
    const singleRow = req.params.id;
    const updateForm = req.body;
    const id = updateForm.id;
    const email = updateForm.email;
    const phone = updateForm.phone
    const user_name = updateForm.user_name;
    const old_password = updateForm.old_password;
    const new_password = updateForm.new_password;
    const sex = updateForm.sex;
    const bio = updateForm.bio;
    let sql;
    let val;
    
    if(singleRow === "email"){
       sql = 'UPDATE user SET email = ? WHERE id = ?'
       val = email;
    }else if(singleRow === "bio"){
        sql = 'UPDATE user SET bio = ? WHERE id = ?';
        val = bio;
    }else if(singleRow === "sex"){
        sql = 'UPDATE user SET sex = ? WHERE id = ?';
        val = sex;
    }else if(singleRow === "phone"){
        sql = 'UPDATE user SET phone = ? WHERE id = ?';
        val = phone;
    }else if(singleRow === "user_name"){
        const sql1 ='SELECT * FROM user WHERE user_name = ?';
        dbConn.query(sql1,[user_name], function(error, data){
            if(error) throw error;
            if(data.length > 0){
                res.json("Error")
            }else{
                sql = 'UPDATE user SET user_name = ? WHERE id=?';
                val = user_name;
                dbConn.query(sql,[val, id], function(err,result){
                    if(err) throw err;
                    else{
                        res.json(singleRow);
                    }
                })
            }
         })
    }else if(singleRow === "old_password" || singleRow === "new_password"){
        const sql1 ='SELECT * FROM user WHERE user_name = ?';
        dbConn.query(sql1,[user_name], function(error, data){
            if(error) throw error;
            if(data.length > 0){
                const userHash = data[0].password;
                bcrypt
                    .compare(old_password, userHash)
                    .then(result => {
                            if(result){
                                bcrypt
                                .hash(new_password, 10)
                                .then(hash => {
                                const sql2 = 'UPDATE user SET password = ? WHERE id = ?';
                                dbConn.query(sql2,[hash,id], function(error,data){
                                    if (error) throw error
                                    else return res.json("password");
                                })
                                  
                                }).catch(err => console.error(err))
                        


                               
                            }else{
                                return res.json("OLD")
                            }
                        })
                    .catch(err => console.error(err))
            }else{
                return res.json("some error");
            }
        })
    }
    if(val){
        dbConn.query(sql,[val,id], function(err,result){
            if(err) throw err;
            else{
                res.json(singleRow);
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

user.get('/directorate/:id', (req,res,next) =>{
    const id = req.params.id;
    const sql = "select * from list_directorate where id = ?";

    dbConn.query(sql,[id], function(error, data){
        if(error) throw error;
        else{
            return res.send(data);
        }
    })
})



user.get('/detail/:id', (req,res,next) =>{
    const id = req.params.id;
    
    const sql = "select * from user where id = ?";

    dbConn.query(sql,[id], function(error, data){
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

user.get('/role/:id', (req,res,next) =>{
    const sql = "select * from list_role where id = ?"
    const id = req.params.id;
    console.log(id)
    dbConn.query(sql,[id], function(error, data){
        if(error) throw error;
        else{
            return res.send(data);
        }
    })
})





module.exports = user;