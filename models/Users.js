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

module.exports = {
  saveUser
}
