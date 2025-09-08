const express=require('express');
const axios= require('axios');
const router=express.Router();



router.post("/",async (req,res)=>{
    try
    {
        const response=await axios.post('http://localhost:8080/',req.body);
        res.json(response.data);
        console.log(response.data);
    }
    catch(error)
    {
        console.error("Error:",error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports=router;