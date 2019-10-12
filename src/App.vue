<template>
  <div id="app">
    <HeaderBar :menulist="menulist" />
    <router-view id="main-wrap" />
  </div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar.vue'

export default {
	components: {
		HeaderBar
	},
	data() {
		return {
			menulist: []
		}
	},
	created() {
		// 获取数据赋值barlist
		this.menulist = [{ menuName: '首页', menuPath: '/home' }, { menuName: '个人中心', menuPath: '/about' }]
	}
}
</script>
<style lang="less">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
