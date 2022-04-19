const express=require('express');
const app=express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json())
app.use("/user", require("./routes/userRouter"));
app.use('/book',require('./routes/bookRouter'))
const port=process.env.Port ||5000

mongoose.connect(
    process.env.URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {

      if (err) throw err;
    }
  );

if(process.env.NODE_ENV=='production') {
    const path=require('path')

    app.get('/',(req,res)=> {
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port, ()=>{
    console.log("server started at :",5000)
})