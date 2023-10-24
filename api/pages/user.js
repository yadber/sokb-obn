const user = require("express").Router();
const dbConn = require('../database');

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

module.exports = user;