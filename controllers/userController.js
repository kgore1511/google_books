const users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const {OAuth2Client}=require('google-auth-library');
const client=new OAuth2Client("860555463282-79huvv0rv93trtrnj3nbv7tt0g3giokr.apps.googleusercontent.com")
const { findOne } = require("../models/userModel");
const userController = {

  login: async (req, res) => {
    try {
        var tokenId=req.body.tokenId;
    client.verifyIdToken({idToken: tokenId,audience: process.env.clientId }).then(async(response) => {
        const {email_verified, name, email}=response.getPayload();
        if(email_verified) {
            const user=await users.findOneAndUpdate(
                {email:email},
                {name:name,
                email:email},
                {new:true,
                upsert:true}
            )
      const accesstoken = createAccessToken({ id: users._id });
    res.status(200).json({ accesstoken: accesstoken,
      _id:user._id,
      email:user.email,
      name:user.name
    });
        }
        else res.send("something wrong")
})
    } catch (err) {

      return res.status(500).json({ msg: err.message });
    }
  }
 
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
};
module.exports = userController;
