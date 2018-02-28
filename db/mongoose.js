const mongoose = require('mongoose');

const config = require('../config/config.json')

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.db}`);
