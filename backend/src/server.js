const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

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

server.listen(authConfig.port);