<template>
  <div class="wrapper">
		<div class="top clear">
			<div class="top1 fl"></div>
			<div class="top2 fr"></div>
		</div>
		<div class="content">
			<router-link class="btn1" to="/login"></router-link>
			<div class="btn2" id="cloudOpen"></div>
		</div>
		<div class="bottom">
			速达软件技术（广州）有限公司©CloudCC版权所有 粤ICP证110683号 粤ICP备05083597号-37
		</div>
	</div>
</template>

<script>
export default {
  name: 'choice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false 
    }
  }
}
</script>
<style>
@import '../css/reset.css';
@import '../css/main.css';
@import '../css/top.css';
@import '../css/choice.css';
</style>
