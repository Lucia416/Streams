var https = require('https');
var buffer = '';
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {

  https.get(requestOptions,function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      return buffer += data;

    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer.toString());
    });

  });
}

getHTML(requestOptions, function(result) {
    console.log("THIS IS THE RESULT", result)
});

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
