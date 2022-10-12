const mongoose  = require("mongoose")

const userSchema = mongoose.Schema({
    email : {
        type : String
    },
    password : {
        type : String
    },
    
   
})

const useref = mongoose.model("user" , userSchema)

module.exports = useref