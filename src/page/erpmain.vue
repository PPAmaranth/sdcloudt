<template>
    <div id="demo">
        <!-- <button @click="getList">getList</button> -->
        <power-drag ref="cyGridster" :your-list="this.$store.getters.showList" :base-margin-left="baseMarginLeft" :base-margin-top="baseMarginTop" :base-width="baseWidth"
            :base-height="baseHeight">
          <template v-for="(item,index) in this.$store.getters.showList" :slot="'slot'+index">
            <div class="dragHandle">
              <div class="tool">
                <span @click="deleteItem(index)" class="el-icon-close" style="color:red;"></span>
              </div>
              <div :is="item.component"></div>
            </div>
          </template>
            <!-- <div v-for="(item,index) in myList" :slot="'slot'+index"></div> -->
        </power-drag>
    </div>
</template>

<script>
    import drag from '@/components/drag/drag.vue';
    import mock from "mockjs"
    import $ from "jquery"
    import _ from "lodash"
    import zj1 from '@/components/zj1'
    import zj2 from '@/components/zj2'
    import zj3 from '@/components/zj3'
    import zj4 from '@/components/zj4'

    export default {
        data() {
            return {
                // myList: this.$store.getters.showList,
                baseWidth: 0,
                baseHeight: 0
            }
        },
        components: {
            'power-drag': drag,
            zj1,zj2,zj3,zj4
        },
        name: 'app',
        methods: {
            getList() {
                let gridster = this.$refs['cyGridster']; //获取gridster实例
                console.log(JSON.stringify(gridster.getList()));
            }
        },
        created() {
            //屏幕适配，使得当前布局能在所有分辨率下适用，示例是在1366*638分辨率下完成
            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;
            this.baseWidth = 100 * (screenWidth / 1366);
            this.baseHeight = 100 * (screenHeight / 638);
            this.baseMarginLeft = 10 * (screenWidth / 1366);
            this.baseMarginTop = 10 * (screenHeight / 638);
            this.$nextTick(function () {
                $(".dragAndResize").css("width", "calc(100% - " + (this.baseMarginLeft) + "px)")
            })
        },
        mounted() {
            let gridster = this.$refs['cyGridster']; //获取gridster实例
            gridster.init(); //在适当的时候初始化布局组件
        },
        methods: {
          deleteItem(index) {
            let gridster = this.$refs['cyGridster']; //获取gridster实例
            gridster.removeItem(index); //此时会在this.myList的index位置将item置为{}，目的是为了不让vue重新渲染整个v-for。
            //注意，这里删除布局框并不会删除里面的组件，组件需要自己用v-if来控制销毁，如果是highchart，必须手动调用chartInstance.$destroy()
          }
        }
    }

</script>

<style lang='less' scoped>
    /*body {*/
        /*overflow-x: hidden;*/
        /*& * {*/
            /*box-sizing: border-box;*/
        /*}*/
    /*}*/
    #demo {
        width: 100%;
        /*padding: 1.5em 0 1.5em 0;*/
    }
    .dragAndResize {
      .item {}
      .dragHandle {
        //拖动手柄样式
        padding: 1.5rem;
        height: 100%;
        cursor:auto;
        .tool {
          position: absolute;
          right: .3rem;
          top: .1rem;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
</style>
