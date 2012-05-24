var lookup = require('../lib/lookup');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.api_post = function(req, res){
  var ip = req.body.ip;
  lookup.lookup(ip, res);
}

exports.api_get = function(req, res){
  var ip = req.params.ip;
  lookup.lookup(ip, res);
}

