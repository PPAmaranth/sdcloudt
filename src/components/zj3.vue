<template>
  <div class="color-list">
    <div
      class="color-item"
      v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
      :key="color.text"
    >{{color.text}}</div>
  </div>
</template>

<script>
    export default {
        name: 'zj3',
        data() {
          return {
            colors: [{
              text: "Aquamarine"
            }, {
              text: "Hotpink"
            }, {
              text: "Gold"
            }, {
              text: "Crimson"
            }, {
              text: "Blueviolet"
            }, {
              text: "Lightblue"
            }, {
              text: "Cornflowerblue"
            }, {
              text: "Skyblue"
            }, {
              text: "Burlywood"
            }]
          }
        },
      mounted () {
        this.$dragging.$on('dragged', ({ value }) => {
          // console.log(value.item)
          // console.log(value.list)
          // console.log(value.otherData)
        })
        this.$dragging.$on('dragend', () => {

        })
      }
    }
</script>

<style lang="less">
    @import '../style/mixin.less';
    .color-list{
      display:grid;
      grid-template-columns: auto 200px;
      grid-template-rows:auto 40px;
      .color-item{
        display:grid;
        grid-template-columns: auto auto;
        grid-template-rows:auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
      }
    }
</style>
