const Receipt = require('../models/Receipt');

const createReceipt = async(data) => Receipt.create(data);

const getAllReceipt = () => Receipt.find().populate('items');

const getOneReceipt = async(id) => Receipt.findById(id).populate('items');

const deleteOneReceipt = (id) => Receipt.findByIdAndDelete(id);

const updateOneReceipt = async(id, data) => Receipt.findByIdAndUpdate( id, {$set: data}, {new: true} ).populate('items');

module.exports = {
  createReceipt,
  getAllReceipt,
  getOneReceipt,
  deleteOneReceipt,
  updateOneReceipt,
}
