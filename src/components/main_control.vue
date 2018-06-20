<template>
    <div>
      <div class="wrapper">
        <el-checkbox v-for="item in myList" size="mini" v-model="item.isshow" @change="updateMessage" :key="item.id">{{item.name}}</el-checkbox>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'main-control',
        data() {
            return {
              myList: this.$store.getters.controlList
            }
        },
        methods: {
          updateMessage () {
            this.$store.commit('updateMessage',this.myList)
            // console.log(this.$store)
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
