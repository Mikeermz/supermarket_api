const Item = require('../models/Item');

const createItem = async(data) => Item.create(data);

const getAllItem = () => Item.find();

const getOneItem = (id) => Item.findById(id);

const deleteOneItem = (id) => Item.findByIdAndDelete(id);

const updateOneItem = (id, data) => {
  console.log(data)
  return Item.findByIdAndUpdate( id, {$set: data}, {new: true} )
}

module.exports = {
  createItem,
  getAllItem,
  getOneItem,
  deleteOneItem,
  updateOneItem,
}
