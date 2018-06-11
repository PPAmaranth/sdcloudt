<template>
	<div class="footer_container"></div>
</template>

<script>
export default {
	name: 'sd-footer',
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
	.footer_container{
		background-color: @red;
		width:100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position:fixed;
		bottom:0px;
		left:0px;
		z-index:10;
	}
</style>