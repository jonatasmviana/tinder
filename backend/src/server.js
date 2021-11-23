const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const httpServer = express();
httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

const server = require('http').Server(httpServer);
const io = require('socket.io')(server);

// io.on('connection', socket => {
	
// })

const authConfig = require('./connection.json');
const urlConnect = 'mongodb+srv://'
	.concat(authConfig.user)
	.concat(':')
	.concat(authConfig.pass)
	.concat(authConfig.cluster)
	.concat('/')
	.concat(authConfig.baseName)
	.concat('?retryWrites=true&w=majority');

mongoose.connect(urlConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

httpServer.listen(authConfig.port);