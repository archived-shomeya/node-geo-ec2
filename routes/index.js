var lookup = require('../lib/lookup');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Geo EC2' })
};

exports.api_post = function(req, res){
  var ip;
  if (typeof(req.body.ip) == 'undefined') {
    ip = lookup.getClientIp(req);
  }
  else {
    ip = req.body.ip; 
  }
  lookup.lookup(ip, res);
}

exports.api_get = function(req, res){
  var ip;
  if (typeof(req.params.ip) == 'undefined') {
    ip = lookup.getClientIp(req);
  }
  else {
    ip = req.params.ip; 
  }
  lookup.lookup(ip, res);
}

