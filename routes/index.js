var geoip = require('geoip-lite');

var ip_lookup = function(ip, res) {
  var result = geoip.lookup(ip);
  res.send(result);
}


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.api_post = function(req, res){
  var ip = req.body.ip;
  ip_lookup(ip, res);
}

exports.api_get = function(req, res){
  var ip = req.params.ip;
  ip_lookup(ip, res);
}

