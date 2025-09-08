
const express= require("express");
const app=express();
const cors=require("cors")
const routes=require("./routes")



app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/',routes);



const PORT =  8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});