<template>
  <div>
    <sd-top></sd-top>
    <!--<el-row class="main_wrapper">-->
      <!--<el-col :span="2" ><div class="nav_test"></div></el-col>-->
      <!--<el-col :span="22"><div :is="nowcomponent"></div></el-col>-->
    <!--</el-row>-->
    <div class="main_wrapper">
      <div class="nav_test">
        <sd-nav></sd-nav>
        <el-collapse v-model="activeNames" >
          <el-collapse-item title="首页应用" name="1">
            <main-control></main-control>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="main_content" :is="nowcomponent"></div>
    </div>
    <sd-footer></sd-footer>
  </div>
</template>
<script>

import sdTop from '@/components/top'
import sdFooter from '@/components/footer'
import sdNav from '@/components/nav'
import mainControl from '@/components/main_control'
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
      activeNames: ['1']
    }
  },
  components: {
		sdTop,
    sdFooter,
    sdNav,
    mainControl,
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
      min-height:650px;
      /deep/ .el-menu{
        border-right:none;
      }
      /deep/ .el-collapse-item__header{
        background:none;
        padding-left: 20px;
        border-bottom: 1px solid #e8e7e7;
      }
      /deep/ .el-collapse-item__wrap{
        background:none;
      }
      /deep/ .el-collapse{
        border-top: 1px solid #e8e7e7;
        border-bottom: 1px solid #e8e7e7;
      }
      /deep/ .el-collapse-item__wrap{
        border-bottom: 1px solid #e8e7e7;
      }
    }
    .main_content{
      width:100%;
    }
  }
</style>
