const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number, 
    default: 5,
  },
  is_active: {
    type: Boolean,
    default: true,
  }
})

module.exports = mongoose.model('Item', itemSchema);
