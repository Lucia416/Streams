var https = require('https');
var buffer = '';
var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  
  https.get(requestOptions,function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      return buffer += data;
      console.log(buffer, '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer.toString());
  });
})
}
getAndPrintHTML(options);
