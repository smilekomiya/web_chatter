var http = require('http')

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('server connected')
});

var io = require('socket.io').listen(server)

server.listen(8888)

io.sockets.on('connection', function (socket) {
    socket.on('message', function (data) {
        io.emit('recieveMessage', data)
    })
})