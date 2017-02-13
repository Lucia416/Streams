var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         console.log(err);
       })
       .on('response', function (response) {                           // Note 3
         console.log(response.headers['content-type'], response.statusMessage)
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
