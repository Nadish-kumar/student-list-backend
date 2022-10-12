const mongoose  = require("mongoose")

const studentSchema = mongoose.Schema({
    name : {
        type : String
    },
    subject : {
        type : String
    },
    mark : {
        type : Number
    }
   
})

const studentref = mongoose.model("student" , studentSchema)

module.exports = studentref