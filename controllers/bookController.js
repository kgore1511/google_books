const users = require("../models/userModel");
const axios=require('axios')
const bookController = {
   
    getBooks: async (req, res) => {
      try {
          const keyword=req.body.data
          const user=await users.findOne({email:req.body.email})
          user.bookSearch.push(keyword)
          await user.save()
        var response=await axios.get("https://www.googleapis.com/books/v1/volumes?q="+keyword+"&key="+process.env.key+"&maxResults=40")
        res.send(response.data)
      }catch(err){
          res.status(500).send(err.message)
      }
    },
}
module.exports=bookController