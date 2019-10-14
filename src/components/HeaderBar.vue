<template>
  <div class="header-bar">
    <ul class="bar-list">
      <router-link tag="li" v-for="(item,index) in menulist" :key="index" :to="{path:item.menuPath}">{{item.menuName}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
	props: {
		menulist: Array
	}
}
</script>
<style lang="less" scoped>
.bar-list {
	display: flex;
	justify-content: space-around;
	align-items: center;
	li {
		cursor: pointer;
	}
}
</style>