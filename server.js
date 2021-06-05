var express = require('express')
var app = express()
var socket = require('socket.io')

var server = app.listen(3000)
console.log(server)

// app.use(express.static('public'))
var io = socket(server)
io.sockets.on('connection',con)
function con(socket){







	console.log(socket.id)
	socket.on('photo',baseurl)
	function baseurl(data){
		socket.broadcast.emit('photo',data)

		 console.log('comeing.....')


	}
}
app.get('/hi',function(req,res){
	res.sendfile(__dirname + '/public/view.html');

})

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/min.html');
});





console.log('running')