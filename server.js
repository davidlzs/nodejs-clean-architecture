const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const bodyParser = require('body-parser');


mongoose.connect("mongodb://localhost:27017/CleanArchitecture");

const User = mongoose.model("Users", {
  fullname: String,
  firstname: String,
  lastname: String,
  age: Number
});

var app = new express();
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  var body = req.body;
  var user = _.pick(body,  ['firstname', 'lastname', 'age']);
  var dbUser = new User(user);
  dbUser.save().then((result) => {
    console.log('User saved', result);
    res.status(200).send({
      status: 'success',
      result
    });
  }).catch((err) => {
    console.log('Unable to save user', err);
    res.status(400).send({status: 'failure'});
  })
});

app.listen(3000, () => {
  console.log('Server is running...');
})
