const express = require('express');
const { 
  ItemCreate,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} = require('../controllers/item');

const router = express.Router();

router.get('/',(req,res)=>{
  res.send({message:'Server on C:'})
});

// Item 
router.post('/item', ItemCreate);
router.get('/items', getItems);
router.get('/item/:id', getItem);
router.delete('/item/:id', deleteItem)
router.put('/item/:id', updateItem)

module.exports = router;
