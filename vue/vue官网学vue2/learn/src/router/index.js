import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { Header, Main, Foot } from "@/components/Layout";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
        alias:'/home'
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/detail",
		name: "Detail",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
		children: [
			{
				path: "layout",
                name:'Layout',
				components: {
					Header,
					Main,
					Foot,
				},
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
