const http = require('http')

http.recreatServer(function(request, response) {
    console.log('request com', request.url);
    response.end('123')
}).listen(8888)