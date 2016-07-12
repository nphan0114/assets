var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var mongoskin = require('mongoskin');
var application_root = __dirname;

var db = mongoskin.db('mongodb://@nphan-ld1/api', {safe: true});

// var db = mongoose.connect('mongodb://nphan-ld1/api');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(application_root, 'public')));

app.param('collectionName', function(req, res, next, collectionName){
  req.collection = db.collection(collectionName)
  return next()
});


//DataBase
app.get('/api', function(req, res, next) {
  res.send('please select a collection, e.g., /collections/messages')
});

//GET
app.get('/api/:collectionName', function(req, res, next) {
  req.collection.find({} ,{limit:50, sort: [['_id',-1]]}).toArray(function(e, results){
    if (e) return next(e)
    res.send(results)
  });
});

// POST ITEM
app.post('/api/:collectionName', function(req, res, next) {
  req.collection.insert(req.body, {}, function(e, results){
    if (e) return next(e)
    res.send(results)
  });
});

// GET BY ID
app.get('/api/:collectionName/:id', function(req, res, next) {
  req.collection.findById(req.params.id, function(e, result){
    if (e) return next(e)
    res.send(result)
  });
});

//UPDATE ITEM
app.put('/api/:collectionName/:id', function(req, res, next) {
  req.collection.updateById(req.params.id, {$set:req.body}, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  });
});

//DELETE ITEM
app.delete('/api/:collectionName/:id', function(req, res, next) {
  req.collection.removeById(req.params.id, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  });
});



//Routes
app.use('/api/:collectionName', require('routes/api.js'));


// Server Port
app.listen(3000);
console.log("API listening on port 3000" );