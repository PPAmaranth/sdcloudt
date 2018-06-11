<template>
	<div>
    <div class="wrapper">
      <div class="left">
        <div v-for="item in value1" :is="getkey(item,data)" style="border:1px solid black"></div>
      </div>
      <div class="right">
        <el-transfer v-model="value1" :data="data" :titles="['功能列表', '激活列表']"
                     :button-texts="['隐藏', '激活']" target-order="push"></el-transfer>
      </div>
    </div>
  </div>
</template>

<script>
  import zj1 from '@/components/zj1'
  import zj2 from '@/components/zj2'
  import zj3 from '@/components/zj3'
  import zj4 from '@/components/zj4'
export default {
	name: 'erpmain',
  data () {
    return {
      data: [
        {
          key: 1,
          label :  '组件1',
          disabled: false,
          component: zj1
        },
        {
          key: 2,
          label :  '组件2',
          disabled: false,
          component: zj2
        },
        {
          key: 3,
          label :  '组件3',
          disabled: false,
          component: zj3
        },
        {
          key: 4,
          label :  '组件4',
          disabled: false,
          component: zj4
        }
      ],
      value1: [1, 4]
    }
  },
  mounted:function(){

  },
  methods:{
      getkey: function(key,array){
        for(var i=0;i<array.length;i++){
          if(array[i].key == key){
            return array[i].component
          }
        }
      }
  },
  components:{
	  zj1,zj2,zj3,zj4
  }
}
</script>
<style lang="less" scoped>
	@import '../style/mixin';
  .wrapper{
    display:grid;
    grid-template-columns: auto 200px;
    grid-template-rows:auto 40px;
    .left{
      display:grid;
      grid-template-columns: auto auto;
      grid-template-rows:auto;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }
  }
</style>
