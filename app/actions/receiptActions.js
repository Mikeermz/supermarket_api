const Receipt = require('../models/Receipt');

const createReceipt = async(data) => Receipt.create(data);

const getAllReceipt = () => Receipt.find().populate('items');

const getOneReceipt = async(id) => Receipt.findById(id).populate('items').exec();

const deleteOneReceipt = (id) => Receipt.findByIdAndDelete(id);

const updateOneReceipt = (id, data) => {
  console.log(data)
  return Receipt.findByIdAndUpdate( id, {$set: data}, {new: true} )
}

module.exports = {
  createReceipt,
  getAllReceipt,
  getOneReceipt,
  deleteOneReceipt,
  updateOneReceipt,
}
