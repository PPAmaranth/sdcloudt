<template>
	<div class="header_container"></div>
</template>

<script>
export default {
  name: 'sd-top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false 
    }
  }
}
</script>
<style lang="less">
	@import '../style/mixin';
	.header_container{
		background-color: @red;
		height: 90px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
</style>