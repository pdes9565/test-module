module.exports = (function(){

  var self = {};
  var pub = {};

  pub.test = function(str, cb){
    cb(str + " processed by external module v1.0.1");
  };

  return pub;

})();