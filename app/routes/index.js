const express = require('express');
const { 
  ItemCreate,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} = require('../controllers/item');

const { 
  ReceiptCreate,
  getReceipts,
  getReceipt,
  deleteReceipt,
  updateReceipt,
} = require('../controllers/receipt');

const router = express.Router();

router.get('/',(req,res)=>{
  res.send({message:'Server on C:'})
});

// Item 
router.post('/item', ItemCreate);
router.get('/items', getItems);
router.get('/item/:id', getItem);
router.delete('/item/:id', deleteItem);
router.put('/item/:id', updateItem);

// Receipt
router.post('/receipt', ReceiptCreate);
router.get('/receipts', getReceipts);
router.get('/receipt/:id', getReceipt);
router.delete('/receipt/:id', deleteReceipt);
router.put('/receipt/:id', updateReceipt);

module.exports = router;
