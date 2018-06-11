<template>
  <div>
    <sd-top></sd-top>
    <sd-nav></sd-nav>
    <el-row class="main_wrapper">
      <el-col :span="2" ><div class="nav_test"></div></el-col>
      <el-col :span="22"><div :is="nowcomponent"></div></el-col>
    </el-row>
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

<style>
  .main_wrapper{
    min-height:610px;
  }
  .nav_test{
    background:#e8e7e7;
    min-height:610px;
  }
</style>
