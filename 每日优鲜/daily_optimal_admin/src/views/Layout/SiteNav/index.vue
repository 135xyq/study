<template>
	<div class="sitenav-container">
		<el-col :span="12" class="nav-container">
			<el-menu
				default-active="1-1"
				class="el-menu-vertical-demo nav-container"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<template v-for="(routes, index) in $store.state.routerMenus">
					<el-submenu
						:index="String(index - 2)"
						v-if="!routes.meta.hidden"
						:key="routes.name"
					>
						<template slot="title">
							<i :class="routes.meta.icon"></i>
							<span>{{ routes.meta.title }}</span>
						</template>
						<template v-for="(route, index1) in routes.children">
							<el-menu-item-group
								:key="route.name"
								v-if="!route.meta.hidden"
								><router-link :to="{ name: route.name }">
									<el-menu-item
										:index="index - 2 + '-' + (index1 + 1)"
									>
										<i :class="route.meta.icon"></i>
										<span>{{ route.meta.title }}</span>
									</el-menu-item>
								</router-link>
							</el-menu-item-group>
						</template>
					</el-submenu>
				</template>
			</el-menu>
		</el-col>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/style/init.less";
@import "~@/style/self.less";
.sitenav-container {
	height: 100%;
	.nav-container {
		width: 200px;
		height: 100%;
	}
}
</style>
