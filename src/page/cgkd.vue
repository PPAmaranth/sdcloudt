<template>
	<div>
    <div class="bar1">
      <span class="bgdate_text">起始日期:</span>
      <el-date-picker v-model="value1" align="right" type="date" placeholder="选择日期"  :picker-options="pickerOptions1" class="bgdate_input" size="mini"></el-date-picker>
      <span class="enddate_text">终止日期:</span>
      <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期"  :picker-options="pickerOptions1" class="enddate_input" size="mini"></el-date-picker>
      <span class="sep"></span>
      <el-button type="primary" icon="el-icon-refresh" size="mini">刷新</el-button>
      <el-button type="primary" icon="el-icon-search" size="mini">查找</el-button>
      <el-button type="primary" icon="el-icon-printer" size="mini">导出</el-button>
    </div>
    <div class="table1">
      <el-table
    border
    stripe
    size="mini"
    max-height="450"
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="单据日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="id"
      label="单据编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="opeator"
      label="业务员"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="department"
      label="部门"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="price"
      label="单据金额"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="company"
      label="供应商"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="phone"
      label="联系电话"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="linkman"
      label="联系人"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="bulider"
      label="制单人"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    <div class="bar2">
      <el-button type="primary" icon="el-icon-edit" size="large">新增</el-button>
      <el-button type="primary" icon="el-icon-delete" size="large">删除</el-button>
    </div>
  </div>	
</template>

<script>
export default {
	name: 'cgkd',
  data () {
    return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        tableData3: [{
          date: '2018-05-03',
          opeator: '王小虎',
          id: '111'
        }, {
          date: '2018-05-02',
          opeator: '王小虎',
          id: '112'
        }, {
          date: '2018-05-04',
          opeator: '王小虎',
          id: '113'
        },{
          date: '2018-05-04',
          opeator: '王小虎',
          id: '114'
        }],
      };
  },
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      indexMethod(index) {
        return index;
      },
      handleClick(row) {
        console.log(row);
      }
    }
}
</script>
<style lang="less">
	@import '../style/mixin';
	.bar1{
    height: 45px;
    border:1px solid #d0d0d0;
    margin:10px;
    font-size: 14px;
    line-height: 45px;
    .bgdate_text{
      margin-left: 80px;
    }
    .enddate_text{
      margin-left: 30px;
    }
    .sep{
      margin-left: 40px;
      margin-right: 40px;
    }
  }
  .table1{
    margin: 10px;
    padding: 10px;
    border: 1px solid #d0d0d0;
    height: 450px;
  }
  .bar2{
    height: 45px;
    margin:10px 10px 10px 900px;
    line-height: 45px;
  }
</style>