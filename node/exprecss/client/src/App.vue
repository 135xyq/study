<template>
	<div id="app">
		<div id="nav">
			<router-link :to="{name:'Home'}">Home</router-link>  |
			<router-link :to="{name:'Self'}">Self</router-link>  |
			<template v-if="userData">
                <span>{{userData.name}}</span>
                <button @click="onHandleLogout">注销</button>
            </template>
			<router-link v-if="!userData" to="/login">Login</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import {mapState} from "vuex";
export default {
    computed:mapState('userLogin',['userData','isLoading']),
    data(){
        return{

        }
    },
    methods:{
        onHandleLogout(){
            this.$store.dispatch('userLogin/logout')
        }
    }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
