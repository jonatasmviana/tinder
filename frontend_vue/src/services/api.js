import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333'
});

const authenticate = (username) => {
	return api.post('/devs', { username });
};

const getDevById = (id) => {
	return api.get(`/dev/${id}`);
};

export default {
	api,
	authenticate,
	getDevById
}