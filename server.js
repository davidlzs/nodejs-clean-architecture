const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const bodyParser = require('body-parser');
const Users = require('./db/Users');

mongoose.connect("mongodb://localhost:27017/CleanArchitecture");

var app = new express();
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  var body = req.body;
  var userData = _.pick(body,  ['firstname', 'lastname', 'age']);

  Users.saveUser(userData).then((result) => {
    res.status(200).send({
      status: 'success',
      result
    });
  }).catch((err) => {
    res.status(400).send({status: 'failure'});
  });
});

app.listen(3000, () => {
  console.log('Server is running...');
})
