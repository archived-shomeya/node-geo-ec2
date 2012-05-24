var lookup = require('../lib/lookup')
  , mixpanel = require('mixpanel');

/*
 * GET home page.
 */

var mp_client = new mixpanel.Client(process.env.MP_TOKEN);

exports.index = function(req, res){
  var client_ip;
  client_ip = lookup.getClientIp(req);
  mp_client.track("request", {
      distinct_id: client_ip,
      path: "home",
      mp_note: "Viewed the home page"
  }, function(err) {
    
  });
  res.render('index', { title: 'Geo EC2' })
};

exports.api_post = function(req, res){
  var ip, client_ip;
  client_ip = lookup.getClientIp(req);
  mp_client.track("request", {
      distinct_id: client_ip,
      path: "api",
      method: "post",
      mp_note: "Made an API POST request"
  }, function(err) {
    
  });
  if (typeof(req.body.ip) == 'undefined') {
    ip = client_ip;
  }
  else {
    ip = req.body.ip; 
  }
  lookup.lookup(ip, res);
}

exports.api_get = function(req, res){
  var ip, client_ip;
  client_ip = lookup.getClientIp(req);
  mp_client.track("request", {
      distinct_id: client_ip,
      path: "api",
      method: "get",
      mp_note: "Made an API GET request"
  }, function(err) {
    
  });
  if (typeof(req.params.ip) == 'undefined') {
    ip = client_ip;
  }
  else {
    ip = req.params.ip; 
  }
  lookup.lookup(ip, res);
}

