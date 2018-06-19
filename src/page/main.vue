<template>
  <div>
    <sd-top></sd-top>
    <sd-nav></sd-nav>
    <!--<el-row class="main_wrapper">-->
      <!--<el-col :span="2" ><div class="nav_test"></div></el-col>-->
      <!--<el-col :span="22"><div :is="nowcomponent"></div></el-col>-->
    <!--</el-row>-->
    <div class="main_wrapper">
      <div class="nav_test"></div>
      <div class="main_content" :is="nowcomponent"></div>
    </div>
    <sd-footer></sd-footer>
  </div>
</template>
<script>

import sdTop from '@/components/top'
import sdFooter from '@/components/footer'
import sdNav from '@/components/nav'
import erpmain from '@/page/erpmain'
import cgdd from '@/page/cgdd'
import cgkd from '@/page/cgkd'
import xskd from '@/page/xskd'
import xsdd from '@/page/xsdd'
import pz from '@/page/pz'
import pz2 from '@/page/pz2'
export default {
  name: 'home',
  data () {
    return {
      nowcomponent:'erpmain',
    }
  },
  components: {
		sdTop,
    sdFooter,
    sdNav,
    erpmain,
    cgdd,
    cgkd,
    xskd,
    xsdd,
    pz,
    pz2
  }
}
</script>

<style lang='less' scoped>
  /*.main_wrapper{*/
    /*min-height:610px;*/
  /*}*/
  /*.nav_test{*/
    /*background:#e8e7e7;*/
    /*min-height:610px;*/
  /*}*/
  .main_wrapper{
    display: flex;
    align-items:stretch;
    .nav_test{
      background:#e8e7e7;
      min-width:150px;
    }
    .main_content{
      width:100%;
    }
  }
</style>
