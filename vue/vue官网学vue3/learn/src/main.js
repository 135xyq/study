import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import GlobalComponent from "./components/GlobalComponent.vue";
import Normal from "./components/Normal.vue";
import NewType from "./components/NewType.vue";

const app = createApp(App);
app.component("GlobalComponent", GlobalComponent)
	.component("Normal", Normal)
	.component("NewType", NewType);

app.directive("color",(el,{value = {}})=>{
	el.style.color = value.color;
})

console.log(1)

app.mount("#app");
