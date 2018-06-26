<template>
    <div>
      <div class="wrapper">
        <el-button type="primary" size="mini" plain @click="saveTolocalStorage">保存配置</el-button>
        <el-checkbox v-for="item in myList" size="mini" v-model="item.isshow" @change="updateMessage" :key="item.id">{{item.name}}</el-checkbox>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'main-control',
        data() {
            let list = []
            if(window.localStorage.main_list){
              list = JSON.parse(window.localStorage.main_list)
              this.$store.commit('updateMessage',list)
            }else{
              list = this.$store.getters.controlList
            }
            return {
              myList: list
            }
        },
        methods: {
          updateMessage () {
            this.$store.commit('updateMessage',this.myList)
          },
          saveTolocalStorage () {
            let list_str = JSON.stringify(this.myList)
            window.localStorage.setItem("main_list",list_str)
            console.log(window.localStorage)
          }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/mixin.less';
    /deep/ .el-checkbox{
      margin:0px;
      padding-left:20px;
      display:block;
    }
    .wrapper{
      width:160px;
    }
</style>
