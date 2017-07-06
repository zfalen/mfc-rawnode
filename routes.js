const express = require('express');
const router = express.Router();
const sendEmail = require('./email_config.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

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

router.get('/cast-and-blast', (req,res)=>{
  res.render('cast-and-blast');
});

router.get('/media', (req,res)=>{
  res.render('media');
});

router.post('/email', (req,res)=>{
  console.log(req);
  res.status(200).send({derp: 'yes'})
});

module.exports = router;
