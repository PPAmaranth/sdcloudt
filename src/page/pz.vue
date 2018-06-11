<template>
	<div>
    <div class="top">
      <el-button type="primary" plain icon="el-icon-caret-left" size="mini">前一</el-button>
      <el-button type="primary" plain size="mini">后一<i class="el-icon-caret-right el-icon--right"></i></el-button>
      <el-button type="primary" plain icon="el-icon-plus" size="mini">签字</el-button>
      <el-button type="primary" plain icon="el-icon-check" size="mini">审核</el-button>
      <el-button type="primary" plain icon="el-icon-tickets" size="mini">借贷</el-button>
      <el-button type="primary" plain icon="el-icon-document" size="mini">找平</el-button>
      <el-button type="primary" plain icon="el-icon-printer" size="mini">打印</el-button>
    </div>
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px" size="mini" style="background:#fff;">
        <el-form-item label="凭证字" class="bar1">
          <el-select v-model="form.pzz" placeholder="请选择凭证字">
            <el-option label="记" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="凭证序号" class="bar1">
          <el-input v-model="form.pzxh"></el-input>
        </el-form-item>
        <el-form-item label="分支名称" class="bar1">
          <el-input v-model="form.fzmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="分支序号" class="bar1">
          <el-input v-model="form.fzxh"></el-input>
        </el-form-item>
        <el-form-item label="凭证号" class="bar1">
          <el-input v-model="form.pzh"></el-input>
        </el-form-item>
        <el-form-item label="编制日期" class="bar1">
          <el-date-picker
            v-model="form.bzrq"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="附件张数" class="bar1">
          <el-input-number v-model="form.fjzs" controls-position="right" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <div class="content_table">
          <div class="top">
            <el-button type="success" plain icon="el-icon-circle-plus" size="mini">增加明细</el-button>
            <el-button type="success" plain icon="el-icon-remove" size="mini">删除明细</el-button>
            <el-button type="success" plain icon="el-icon-edit" size="mini">辅助核算</el-button>
          </div>
          <div class="table">
            <el-table
              :data="tableData3"
              show-summary
              style="width: 100%">
              <el-table-column type="expand" width="50">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="摘要">
                      <span>{{ props.row.zy }}</span>
                    </el-form-item>
                    <el-form-item label="会计科目">
                      <span>{{ props.row.hjkm }}</span>
                    </el-form-item>
                    <el-form-item label="币种">
                      <span>{{ props.row.bz }}</span>
                    </el-form-item>
                    <el-form-item label="本币借方">
                      <span>{{ props.row.num }}</span>
                    </el-form-item>
                    <el-form-item label="本币贷方">
                      <span>{{ props.row.num2 }}</span>
                    </el-form-item>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                type="index"
                width="50">
              </el-table-column>
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="zy"
                label="摘要"
                >
              </el-table-column>
              <el-table-column
                prop="hjkm"
                label="会计科目"
                width="120">
              </el-table-column>
              <el-table-column
                prop="bz"
                label="币种"
                width="60">
              </el-table-column>
              <el-table-column label="本币借方">
                <el-table-column
                  prop="num"
                  label="亿"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="千"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="百"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="十"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="万"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="千"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="百"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="十"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="元"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="角"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="分"
                  width="30">
                </el-table-column>
              </el-table-column>
              <el-table-column label="本币贷方">
                <el-table-column
                  prop="num2"
                  label="亿"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="千"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="百"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="十"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="万"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="千"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="百"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="十"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="元"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="角"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="num2"
                  label="分"
                  width="30">
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
          <div class="bottom">
            <el-form-item label="制单人" class="bar1">
              <el-input v-model="form.zdr" disabled></el-input>
            </el-form-item>
            <el-form-item label="签字人" class="bar1">
              <el-input v-model="form.qzr" ></el-input>
            </el-form-item>
            <el-form-item label="审核人" class="bar1">
              <el-input v-model="form.shr" ></el-input>
            </el-form-item>
            <el-form-item label="登帐人" class="bar1">
              <el-input v-model="form.dzr" ></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="content_bottom">
          <el-button type="primary" plain icon="el-icon-plus" size="mini">保存新增</el-button>
          <el-button type="primary" plain icon="el-icon-check" size="mini">保存</el-button>
          <el-button type="primary" plain icon="el-icon-close" size="mini">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
	name: 'pz',
  data () {
    return {
      form: {
          pzz: '',
          pzxh: '',
          fzmc: '总部',
          fzxh: '',
          pzh: '',
          bzrq: '',
          fjzs: '',
          zdr: 'a',
          qzr: 'b',
          shr: 'c',
          dzr: 'd',
        },
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
          zy:"摘要",
          hjkm:"科目1",
          bz:"rmb",
          num:"1",
          num2:"2",
        },{
          zy:"摘要2",
          hjkm:"科目2",
          bz:"rmb",
          num:"3",
          num2:"1",
        }]
    }
  }
}
</script>
<style lang="less" scoped>
	@import '../style/mixin';

	.top{
    min-width: 320px;
    margin: 5px;
    padding: 5px;
    padding-bottom: 0px;
    border:1px solid #d0d0d0;
    .el-button+.el-button{
      margin-left: 0px;
      margin-bottom: 5px;
    }
  }
  .content{
    min-width: 300px;
    margin: 5px;
    padding: 5px;
    margin-bottom:40px;
    border:1px solid #d0d0d0;
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
      margin-bottom:5px;
    }
    .bar1{
      width:30%;
      min-width: 280px;
      display: inline-block;
    }
    .content_table{
      min-width: 280px;
      margin: 5px;
      padding: 5px;
      border:1px solid #d0d0d0;
      .top{
        min-width: 260px;
      }
      .table{
        min-width: 280px;
        margin: 5px;
        padding: 5px;
        border:1px solid #d0d0d0;
      }
      .bottom{
        min-width: 280px;
        margin: 5px;
        padding: 5px;
        border:1px solid #d0d0d0;
      }
    }
    .content_bottom{
      min-width: 300px;
      margin: 5px;
      padding: 5px;
      border:1px solid #d0d0d0;
    }
  }
  .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 100%;
    }
  @media screen and (min-width:0px) and (max-width:414px) {
  }
</style>
