const express  = require ("express")
const app = express();


app.get('/',(req,res)=>{
    res.send("hello there");
})
app.listen(3001,()=>console.log("Server backend started at 30001"));