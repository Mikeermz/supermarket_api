const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
  subtotal: {
    type: Number,
    default: 0,
  },
  tax: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number, 
    default: 0,
  },
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Item',
    required: true
  }]
})

module.exports = mongoose.model('Receipt', receiptSchema);
