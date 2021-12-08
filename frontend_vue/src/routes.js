import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/login/Login';
import Home from '@/pages/home/Home';

Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/dev/:id',
		name: 'home',
		component: Home,
		meta: {
			requiresAuth: true
		}
	},
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	const currentDevId = localStorage.getItem('currentDevId');
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if (requiresAuth && !currentDevId) {
		next('login');
	}

	next();
})

export default router;