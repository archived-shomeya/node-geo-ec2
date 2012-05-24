var geoip = require('geoip-lite');

exports.lookup = function(ip, res) {
  var result = geoip.lookup(ip);
  res.send(result);
}