const express=require('express');
const db = require('./database.js');
const router=express.Router();



router.post("/",async (req,res)=>{
    try
    {
        const name =req.body.name;
        const registration = req.body.registrationId;
        const degree = req.body.degree;
        const branch = req.body.branch;
        const year = req.body.year;
        const gender = req.body.gender;
        const dob = req.body.dob;

        const query = `INSERT INTO Student (name, registration_no, degree, branch, year, gender, dob)VALUES (?, ?, ?, ?, ?,?,?)`;

        const [result] = await db.execute(query, [name, registration, degree, branch, year,gender, dob]);
        res.status(201).json({
            message: 'User created successfully!',
        });
    }
    catch(error)
    {

        if (error.code === 'ER_DUP_ENTRY') {
            // Send a 409 Conflict status code
            return res.status(409).json({
                message: 'This registration number already exists.'
            });
        }
        console.error("Error:",error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/notice",async (req,res)=>
{

    try
    {
        const query = 'SELECT * FROM AlumniNotes';
        const [rows] = await db.execute(query);
        res.status(200).json(rows);
    }
    catch(error)
    {
        console.error("Error:",error.message);
        res.status(500).json({ error: `${err.message}` });
    }

})




module.exports=router;