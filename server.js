const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');
const Users = require('./models/users');
const groupService = require('./service/group-service');

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


app.post('/groups', (req, res) => {
  var body = req.body;
  var groupData = _.pick(body,  ['groupname']);

  groupService.createGroup(groupData)
    .then((result) => {
      res.status(200).send({
        status: 'success',
        result
      });
    }).catch((err) => {
      console.log(err);
      res.status(400).send({status: 'failure'});
    });
});

app.listen(3000, () => {
  console.log('Server is running...');
})
