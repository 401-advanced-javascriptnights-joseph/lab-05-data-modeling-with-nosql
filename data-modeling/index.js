'use strict';

const mongoose = require('mongoose');
const Categories = require('./models-singular/categories');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });
// Do some work

// Disconnect
mongoose.disconnect();