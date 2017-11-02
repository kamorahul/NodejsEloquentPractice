

module.exports = {
  decode: function (url) {
  	var queryIndex = url.indexOf('?')  + 1;
   var pairs = url.slice(queryIndex).split('&');

   var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

   return result;
  }
};