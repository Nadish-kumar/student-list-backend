var studentcon = require("../model/student")


const postuser = (req,res) => {
    var dbcard = req.body
   console.log(dbcard)
   studentcon.insertMany(dbcard, (err,data) => {
    if(err) {
        res.status(500).send(res)
    }else{
        res.status(200).send(data)
    }
   })
}

const getuser = (req,res) => {
    studentcon.find((err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
       })
}

const deleteuser = (req,res) => {
    var dbcard = req.body
    console.log(dbcard);
    studentcon.deleteOne(dbcard, (err,data) => {
        if(err) {
            res.status(500).send(res)
        }else{
            res.status(200).send(data)
        }
       })
}

const edituser = (req,res) => {
var dbcard = req.body
console.log(dbcard);
 
let user = studentcon.findOne({ id: req.body.id });
if(user) {
    studentcon.updateOne(dbcard, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
}else{
    res.status(401).json({ message: "user not found" });
}
}

const mainfun = (req,res) => {
    var dbcard = req.body
    console.log(dbcard);
     let user = studentcon.findOne({ name: req.body.name });
    if(user) {
       console.log(user)
        studentcon.updateOne(marked, (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(data);
            }
          });
    } else {
        studentcon.insertMany(dbcard, (err,data) => {
            if(err) {
                res.status(500).send(res)
            }else{
                res.status(200).send(data)
            }
           })
    }
}




module.exports = {
    postuser,
    getuser,
    deleteuser,
    edituser,
    mainfun,
    
}