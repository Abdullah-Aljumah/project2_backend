const userModel = require("../../db/models/userSchema");
// const userModel = require("../../db/models/userSchema")

// let users = [];

const getUsers = async (req, res) => {
  userModel
    .find({})
    .then((result) => {
        // users.push(result)
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// console.log(users);
// const createUser = (req, res) => {
//   const { userName, email, password } = req.body;

//   const newUser = new userModel({
//     userName,
//     email,
//     password,
//   });

//   newUser
//     .save()
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };


const newUser = (req, res)=>{
  userModel.findOne({email:req.body.email}).then((user)=>{
    if(user){
      return res.status(400).json("Email already taken")
    } else {
      const newUser = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
      })
      newUser.save()
      return res.status(200).json(newUser)
    }
  })
}


module.exports = { getUsers, newUser };
