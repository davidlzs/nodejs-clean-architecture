const mongoose = require('mongoose');

const User = mongoose.model("Users", {
  fullname: String,
  firstname: String,
  lastname: String,
  age: Number
});

const saveUser = (userData) => {
  return new Promise((resolve, reject) => {
    var user = new User(userData);
    user.save()
      .then(user => {
        console.log('User saved', user);
        resolve(user);
      })
      .catch(err => {
        console.log('Unable to save user', err);
        reject(user);
      });
  });
}


const findOneUser = async () => {
  try {
    var user = User.findOne({});
    return user;
  } catch(err) {
    console.log("Unable to find user", err);
    throw new Error('Unable to find user');
  }
}

module.exports = {
  saveUser,
  findOneUser,
  User
}
