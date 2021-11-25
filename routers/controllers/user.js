const userModel = require("../../db/models/userSchema");

// Get all users
const getUsers = async (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Create new user
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


// Find user by email
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

// edit bio of the user
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

// Remove from cart
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

// Add to cart
const favoriteUserTest = (req, res) => {
  const { email, ObjectId } = req.params;
  userModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
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

// Get all cart
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
  removeFavoriteUser,
  favoriteUserTest,
  getFavorite
};
