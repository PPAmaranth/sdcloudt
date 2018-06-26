<template>
	<div class="nav_container">
		<div class="menu">
			<el-menu :default-active="this.$parent.nowcomponent" class="el-menu-demo" mode="vertical" @select="handleSelect" :active-text-color="activeColor" menu-trigger="hover" collapse background-color="#e8e7e7" >
			  <el-menu-item :index="erp_nav.erpmain.url" :name="erp_nav.erpmain.name">{{erp_nav.erpmain.name}}</el-menu-item>
				<el-submenu index="2">
			    <template slot="title">{{erp_nav.nowpage}}</template>
			    <el-submenu v-for="item1 in erp_nav.children" :index="item1.url" :key="item1.url" :name="item1.name">
			      <template slot="title">{{item1.name}}</template>
			      <el-menu-item v-for="item2 in item1.children" :index="item2.url" :key="item2.url" :name="item2.name">{{item2.name}}</el-menu-item>
			    </el-submenu>
			    <el-menu-item v-for="item3 in erp_nav.single" :index="item3.url" :key="item3.url" :name="item3.name">{{item3.name}}</el-menu-item>
			  </el-submenu>
			</el-menu>
			<div class="line"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sd-nav',
  	data () {
	    return {
	    activeColor:'#9b1700',
	    // activeIndex: 'erpmain',
        erp_nav:{
        	nowpage:"导航",
        	erpmain:{
        		name:"首页",
        		url:"erpmain"
        	},
        	children:[{
        		name:"采购系统",
        		url:"cgxt",
        		children:[
	        	{
	        		name:"采购开单",
	        		url:"cgkd"
	        	},
	        	{
	        		name:"采购订单",
	        		url:"cgdd"
	        	}]
	        },
        	{
        		name:"销售系统",
        		url:"xsxt",
        		children:[{
        		name:"销售开单",
        		url:"xskd"
	        	},
	        	{
	        		name:"销售订单",
	        		url:"xsdd"
	        	}]
        	}],
        	single:[{
        		name:"凭证test",
        		url:"pz",
        	},{
            name:"凭证test2",
            url:"pz2",
          }]
        }
      };
	},
  methods: {
    handleSelect(key,keyPath,event) {
      let obj = {}
      obj.label = event.$attrs.name
      obj.name = key
      let exist = false
      for(let i=0;i<this.$parent.now_arr.length;i++){
        if(this.$parent.now_arr[i].label == obj.label){
          this.$parent.nowcomponent = key
          exist = true
        }
      }
      if(exist==false){
        this.$parent.now_arr.push(obj)
        this.$parent.nowcomponent = key
      }
    }
  }
}
</script>
<style lang="less" scoped>
	@import '../style/mixin';
  .el-menu--collapse{
    width:100%;
  }
</style>
