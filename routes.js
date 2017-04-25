const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.render('index');
});

router.get('/waters', (req,res)=>{
  res.render('waters');
});

router.get('/town', (req,res)=>{
  res.render('town');
});

router.get('/trips', (req,res)=>{
  res.render('trips');
});

router.get('/story', (req,res)=>{
  res.render('story');
});

module.exports = router;