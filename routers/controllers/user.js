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

// edit name of the user
const changeName = (req, res) => {
  const { email } = req.params;
  const { userName } = req.body;
  userModel
    .findOneAndUpdate(
      { email: `${email}` },
      { $set: { userName: userName } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// edit name of the user
const changeBio = (req, res) => {
  const { email } = req.params;
  const { bio } = req.body;
  userModel
    .findOneAndUpdate(
      { email: `${email}` },
      { $set: { bio: bio } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const favoriteUser = (req, res) => {
  const { email, name } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $push: { favorite: name } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const removeFavoriteUser = (req, res) => {
  const { email, _id } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $pull: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//  here
const favoriteUserTest = (req, res) => {
  const { email, ObjectId } = req.params;
  userModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
    // if (user) {
    //   return res.status(400).json("Card already picked");
    // } else {
      userModel
        .findOneAndUpdate(
          { email: email },
          { $push: { favoriteSchema: ObjectId } },
          { new: true }
        )
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    // }
  });
};

const getFavorite = (req, res) => {
  const { email } = req.params;
  userModel
    .find({ email: email })
    .populate("favoriteSchema")
    .exec()
    .then((result) => {
      res.send(result[0].favoriteSchema);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getUsers,
  newUser,
  findUserByEmail,
  changeName,
  changeBio,
  favoriteUser,
  removeFavoriteUser,
  favoriteUserTest,
  getFavorite
};
