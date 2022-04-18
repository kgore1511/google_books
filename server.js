const express=require('express');
const {OAuth2Client}=require('google-auth-library');
const client=new OAuth2Client("860555463282-79huvv0rv93trtrnj3nbv7tt0g3giokr.apps.googleusercontent.com")
const app=express();
app.use(express.json())
app.use(express.urlencoded())
const port=process.env.Port ||5000

app.post('/api/googlelogin',function(req,res) {
    console.log("chala");
    var tokenId=req.body.tokenId;
    client.verifyIdToken({idToken: tokenId,audience: "860555463282-79huvv0rv93trtrnj3nbv7tt0g3giokr.apps.googleusercontent.com" }).then(response => {
        const {email_verified, name, email}=response.getPayload;
        console.log(response.payload)
        res.send('/search')
    })
})

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