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
    const file = req.file ? req.file.filename : "No file attached!";
    const program_name = req.body.program_name;
    const host_name = req.body.host_name;
    const host_number = req.body.host_number;
    const guest_number = req.body.guest_number;
    const studio_idfk = req.body.studio_idfk;
    const scheduled_date = req.body.scheduled_date;
    
    const scheduled_s_time = req.body.scheduled_s_time;
    const scheduled_e_time = req.body.scheduled_e_time;
    const description = req.body.description;
    const user_idfk = req.body.user_idfk;
    
    const date = new Date()
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString();
    const savedDate = `${day}  ${time}`;
    const production_type = "Studio";
    
    const sql = "INSERT INTO saved_studio_production_form (program_name, host_name, host_number, guest_number, studio_idfk, scheduled_date, scheduled_s_time, scheduled_e_time, description, file, user_idfk, saved_date, production_type, update_date ) VALUES( ? )"
    const values = [program_name, host_name, host_number, guest_number,studio_idfk, scheduled_date, scheduled_s_time, scheduled_e_time, description, file,user_idfk, savedDate, production_type,date ];

    dbConn.query(sql, [values], function(err, result){
        if(err) throw err;
        else {
            res.json("saved")
        }
    })
   
    
})



studioProduction.get('/list/:id', (req,res,next) =>{
    const id = req.params.id;
    const sql = "select * from saved_studio_production_form where user_idfk = ? ORDER BY update_date DESC";
    dbConn.query(sql,[id], function(error, data){
        if(error) throw error;
        else{
            return res.send(data);
        }
    })
})


studioProduction.post('/check', (req,res,next) =>{
    const val = req.body;
    const choose_studio = val.choose_studio;
    const start_date = val.start_date;
    const start_time = val.start_time;
    const end_time = val.end_time;

    const sql = "SELECT * FROM saved_studio_production_form where studio_idfk =? and scheduled_date =? and ? BETWEEN scheduled_s_time and scheduled_e_time";
    dbConn.query(sql, [choose_studio,start_date,start_time], function(error,data){
        if(error) throw error;
        else{
            return res.send(data);
        }
    })

})

studioProduction.delete('/delete/:id', (req,res,next) =>{
    const val = req.params.id;

    const sql = "DELETE FROM saved_studio_production_form where id = ?";
    dbConn.query(sql,[val], function(error,data){
        if(error) throw error;
        else{
            return res.json("DELETED")
        }
    })
    
})

studioProduction.put('/update/:id', (req,res,next) => {
    const val = req.params.id;
    const program_name = req.body.program_name;
    const host_name = req.body.host_name;
    const host_number = req.body.host_number;
    const guest_number = req.body.guest_number;
    const description = req.body.description;
    const date = new Date();

    const sql = "UPDATE saved_studio_production_form  SET program_name = ?, host_name = ?, host_number = ?, guest_number = ?, description = ?, update_date = ? WHERE id = ?"

    dbConn.query(sql, [program_name,host_name,host_number,guest_number, description, date, val], function(error,data){
        if(error) throw error;
        else{
            return res.json("updated");
        }
    })
})


module.exports = studioProduction;