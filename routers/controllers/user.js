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

const newUser = (req, res) => {
  userModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json("Email already taken");
    } else {
      const newUser = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).json(newUser);
    }
  });
};

const findUserByEmail = (req, res) => {
  const { email } = req.params;
  userModel
    .find({ email: `${email}` })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getUsers, newUser, findUserByEmail };
