<template>
	<ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
import { chartData } from "@/mock";
export default {
	data() {
		this.chartSettings = {
			stack: { 用户: ["访问用户", "下单用户"] },
			area: true,
		};
		return {
			chartData,
		};
	},
};
</script>
