import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/login/Login';
import Home from '@/pages/home/Home';
import checkInvalidToken from "./services/token.js";

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

	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	if (requiresAuth) {

		const lsKey = localStorage.getItem("key");
		if (!lsKey) {
			next(to.path !== '/login' ? '/login' : undefined);
			return;
		}

    if (checkInvalidToken()) {
			next('login');
      return;
    }
	}

	next();
})

export default router;