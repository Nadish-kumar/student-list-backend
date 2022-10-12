var userdef = require("../model/user")
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken")


const login = async (req,res) => {
    const secret = "4641316895";
  //find the email matches
  try {
    let user = await userdef.findOne({ email: req.body.email });
    if (user) {
      let passwordresult = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log(passwordresult);
      if (passwordresult) {
        let token = jwt.sign({ userid: user._id }, secret, { expiresIn: "1d" });
        res.json({ token });
      } else {
        res.status(401).json({ message: "wrong password" });
      }
    } else {
      res.status(401).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
  }
}


const passwordchange = async(req,res) => {
    try {
        let user = await userdef.findOne({ email: req.body.email });
        if (user) {
          var salt = bcrypt.genSaltSync(10);
          var hash = bcrypt.hashSync(req.body.password, salt);
          req.body.password = hash;
          const dbcard = req.body;
          userdef.updateOne(dbcard, (err, data) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(data);
            }
          });
        } else {
          res.status(401).json({ message: "user not found" });
        }
      } catch (error) {
        console.log(error);
      }

}

const signup = (req,res) => {
      //hash the password
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  const dbcard = req.body;
  console.log(dbcard);
  userdef.insertMany(dbcard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
}


module.exports = {
     login,
     signup,
     passwordchange
}
