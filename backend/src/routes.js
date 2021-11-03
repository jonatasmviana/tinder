const routes = require('express').Router();
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

routes.get('/devs', DevController.getDevByUserName);
routes.get('/devs/todos', DevController.getAllDevs);
routes.get('/devs/:devId', DevController.getDevById);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;