'use strict';

const Model = require('../mongo.js');
const schema = require('./products-schema');
// How do we get it in here so we can run methods on it?

class Products extends Model{
  constructor() {
    super();
    this.schema = schema;
  }
}

module.exports = Products;