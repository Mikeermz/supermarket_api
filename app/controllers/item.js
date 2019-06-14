const { 
  createItem,
  getAllItem,
  getOneItem,
  deleteOneItem,
  updateOneItem,
} = require('../actions');

const ItemCreate = (req, res) => {
  createItem(req.body)
      .then(
        item => res.status(201).json({
          "message": "Item created",
          item,
        })
      ).catch((error) => res.status(400).send(error) )
};

const getItems = (req, res) => {
  getAllItem()
      .then(
        items => res.status(200).json({
          items,
        })
      ).catch((error) => res.status(400).send(error) )
};

const getItem = (req, res) => {
  const id = req.params.id;
  getOneItem(id)
      .then(
        items => res.status(200).json({
          items,
        })
      ).catch((error) => res.status(400).send(error) )
};

const deleteItem = (req, res) => {
  const id = req.params.id;
  deleteOneItem(id)
      .then(
        item => res.status(200).json({
          item,
        })
      ).catch((error) => res.status(400).send(error) )
}

const updateItem = (req, res) => {
  const data = req.body
  const id = req.params.id;
  updateOneItem(id, data)
      .then(
        item => res.status(200).json({
          item,
        })
      ).catch((error) => res.status(400).send(error) )
}

module.exports = {
  ItemCreate,
  getItems,
  getItem,
  deleteItem,
  updateItem,
}
