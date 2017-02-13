var https = require('https');
var buffer = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

module.exports = function getHTML(options, callback){
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      return buffer += data;

    });
    response.on('end', function() {
      callback(buffer);

      console.log('Response stream complete.');
    });
  });
}
