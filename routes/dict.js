var express = require('express');
var router = express.Router();
var db = require('../models')
/* GET users listing. */
router.get('/',function(req,res,next){
  res.render('')
})

router.get('/search',function(req,res,next){
  db.Word.findAll()
  .then(allwords) => {

  }
})

module.exports = router;