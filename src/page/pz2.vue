<template>
    <div>
      <div class="wrapper" @click="pzclick">
        <el-form ref="form" :model="form" label-width="80px" size="mini" style="background:#fff;">
          <div class="top">
            <el-row>
              <el-col :span="24"><div class="top_text">记账凭证</div></el-col>
            </el-row>
          </div>
          <div class="content1">
            <el-row type="flex" justify="space-around">
              <el-col :span="6">
                <el-form-item label="凭证号" class="bar1">
                  <el-input v-model="form.pzh"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="凭证序号">
                  <el-input v-model="form.pzxh"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="分支序号">
                  <el-input v-model="form.fzxh"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
              <el-col :span="6">
                <el-form-item label="凭证字">
                  <el-select v-model="form.pzz" placeholder="请选择凭证字">
                    <el-option label="记" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="编制日期">
                  <el-date-picker
                    v-model="form.bzrq"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="分支名称">
                  <el-input v-model="form.fzmc" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
              <el-col :span="6">&nbsp</el-col>
              <el-col :span="6">&nbsp</el-col>
              <el-col :span="6">
                <el-form-item label="附件张数" class="fj">
                  <el-input-number v-model="form.fjzs" controls-position="right" :min="1" :max="10" ></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div class="content2">
            <el-table
              size="mini"
              border
              :data="tableData3"
              show-summary
              height="320"
              :summary-method="getSummaries"
              style="width: 100%"
              ref="singleTable"
              :span-method="arraySpanMethod"
              highlight-current-row
              @header-click="headClick"
              @row-click="handleCurrentChange"
              class="tb-edit">
              <!--<el-table-column type="expand" width="50">-->
                <!--<template slot-scope="props">-->
                  <!--<el-form label-position="left" inline class="demo-table-expand">-->
                    <!--<el-form-item label="摘要">-->
                      <!--<span>{{ props.row.zy }}</span>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="会计科目">-->
                      <!--<span>{{ props.row.hjkm }}</span>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="币种">-->
                      <!--<span>{{ props.row.bz }}</span>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="本币借方">-->
                      <!--<span>{{ props.row.num }}</span>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="本币贷方">-->
                      <!--<span>{{ props.row.num2 }}</span>-->
                    <!--</el-form-item>-->
                    <!--</el-form-item>-->
                  <!--</el-form>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--type="selection"-->
                <!--width="50">-->
              <!--</el-table-column>-->
              <el-table-column
                width="30"
              label="+"
              class-name="addBtn">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData3)"
                    type="text"
                    size="mini">-</el-button>
                </template>
              </el-table-column>
              <el-table-column
                type="index"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
                class-name="text_edit"
                prop="zy"
                label="摘要">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.zy" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.zy}}</span>
                </template>
              </el-table-column>
              <el-table-column
                class-name="text_edit"
                prop="hjkm"
                label="会计科目">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.hjkm" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.hjkm}}</span>
                </template>
              </el-table-column>
              <el-table-column
                class-name="text_edit"
                prop="bz"
                label="币种">
                <template slot-scope="scope">
                  <el-select size="mini" v-model="scope.row.bz"  filterable="" allow-create="" placeholder="请选择币种" @change="handleEdit(scope.$index, scope.row)">
                    <!--<el-option label="rmb" value="rmb"></el-option>-->
                    <!--<el-option label="$" value="$"></el-option>-->
                    <el-option v-for="item in select_bz" :key="item.value" :label="item.value" :value="item.value">
                      <span style="float: left">{{ item.value}}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label}}</span>
                    </el-option>
                    <div>
                      <el-button type="success" plain size="mini" @click="bzAdd">新增</el-button>
                      <el-button type="primary" plain size="mini">修改</el-button>
                      <el-button type="danger" plain size="mini">删除</el-button>
                    </div>
                  </el-select>
                  <span>{{scope.row.bz}}</span>
                </template>
              </el-table-column>
              <el-table-column label="本币借方">
                <el-table-column
                  class-name="num_edit"
                  prop="num_0"
                  label="亿"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0"  v-model="scope.row.num_0"></el-input-number><span>{{scope.row.num_0}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num_1"
                  label="千"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_1"></el-input-number><span>{{scope.row.num_1}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit blue-line"
                  prop="num_2"
                  label="百"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_2"></el-input-number><span>{{scope.row.num_2}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num_3"
                  label="十"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_3"></el-input-number><span>{{scope.row.num_3}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num_4"
                  label="万"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_4"></el-input-number><span>{{scope.row.num_4}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit blue-line"
                  prop="num_5"
                  label="千"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_5"></el-input-number><span>{{scope.row.num_5}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num_6"
                  label="百"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_6"></el-input-number><span>{{scope.row.num_6}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num_7"
                  label="十"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_7"></el-input-number><span>{{scope.row.num_7}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit red-line"
                  prop="num_8"
                  label="元"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_8"></el-input-number><span>{{scope.row.num_8}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num_9"
                  label="角"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_9"></el-input-number><span>{{scope.row.num_9}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit black-line"
                  prop="num_10"
                  label="分"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num_10"></el-input-number><span>{{scope.row.num_10}}</span>-->
                  <!--</template>-->
                </el-table-column>
              </el-table-column>
              <el-table-column label="本币贷方">
                <el-table-column
                  class-name="num_edit"
                  prop="num2_0"
                  label="亿"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" v-model="scope.row.num2_0"></el-input-number><span>{{scope.row.num2_0}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_1"
                  label="千"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_1"></el-input-number><span>{{scope.row.num2_1}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit blue-line"
                  prop="num2_2"
                  label="百"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_2"></el-input-number><span>{{scope.row.num2_2}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_3"
                  label="十"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_3"></el-input-number><span>{{scope.row.num2_3}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_4"
                  label="万"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_4"></el-input-number><span>{{scope.row.num2_4}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit blue-line"
                  prop="num2_5"
                  label="千"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_5"></el-input-number><span>{{scope.row.num2_5}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_6"
                  label="百"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_6"></el-input-number><span>{{scope.row.num2_6}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_7"
                  label="十"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_7"></el-input-number><span>{{scope.row.num2_7}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit red-line"
                  prop="num2_8"
                  label="元"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_8"></el-input-number><span>{{scope.row.num2_8}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_9"
                  label="角"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_9"></el-input-number><span>{{scope.row.num2_9}}</span>-->
                  <!--</template>-->
                </el-table-column>
                <el-table-column
                  class-name="num_edit"
                  prop="num2_10"
                  label="分"
                  width="30">
                  <!--<template slot-scope="scope">-->
                    <!--<el-input-number size="mini" controls-position="right" :min="0" :max="9" v-model="scope.row.num2_10"></el-input-number><span>{{scope.row.num2_10}}</span>-->
                  <!--</template>-->
                </el-table-column>
              </el-table-column>
              <el-table-column class-name="num1" width="1">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.num"  @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
              </el-table-column>
              <el-table-column class-name="num2" width="1">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.num2"  @change="handleEdit(scope.$index, scope.row)"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="content3">
            <el-row type="flex">
              <el-col :span="4">
                <el-form-item label="制单人">
                  <el-input v-model="form.zdr"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="签字人">
                  <el-input v-model="form.qzr"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="审核人">
                  <el-input v-model="form.shr"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="登帐人">
                  <el-input v-model="form.dzr"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'pz2',
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
        select_bz: [{
          value: 'CNY',
          label: '人民币'
        }, {
          value: 'USD',
          label: '美元'
        }, {
          value: 'EUR',
          label: '欧元'
        }],
        tableData3: [{
          zy:"摘要",
          hjkm:"科目1",
          bz:"CNY",
          num:0,
          num_0:1,
          num_1:0,
          num_2:0,
          num_3:0,
          num_4:1,
          num_5:1,
          num_6:1,
          num_7:1,
          num_8:1,
          num_9:0,
          num_10:0,
          num2:0,
          num2_0:1,
          num2_1:0,
          num2_2:0,
          num2_3:0,
          num2_4:1,
          num2_5:1,
          num2_6:1,
          num2_7:1,
          num2_8:1,
          num2_9:0,
          num2_10:0
        },{
          zy:"摘要2",
          hjkm:"科目2",
          bz:"USD",
          num:0,
          num_0:2,
          num_1:0,
          num_2:0,
          num_3:0,
          num_4:1,
          num_5:1,
          num_6:1,
          num_7:2,
          num_8:1,
          num_9:0,
          num_10:0,
          num2:0,
          num2_0:1,
          num2_1:0,
          num2_2:0,
          num2_3:0,
          num2_4:1,
          num2_5:1,
          num2_6:1,
          num2_7:1,
          num2_8:1,
          num2_9:0,
          num2_10:0
        }]
      }
    },
    methods: {
      handleCurrentChange(row, event, column) {//当前编辑表行改变事件
        row.num = row.num_0*100000000 + row.num_1*10000000 + row.num_2*1000000 + row.num_3*100000 + row.num_4*10000 + row.num_5*1000 + row.num_6*100 + row.num_7*10 + row.num_8*1 + row.num_9*0.1 + row.num_10*0.01
        row.num = row.num.toFixed(2)
        row.num2 = row.num2_0*100000000 + row.num2_1*10000000 + row.num2_2*1000000 + row.num2_3*100000 + row.num2_4*10000 + row.num2_5*1000 + row.num2_6*100 + row.num2_7*10 + row.num2_8*1 + row.num2_9*0.1 + row.num2_10*0.01
        row.num2 = row.num2.toFixed(2)
      },
      handleEdit(index, row) {//编辑表行修改事件
        let num = row.num
        let bol1 = true//判断0
        row.num_0 = Math.floor(num/100000000)
        row.num_0 = this.num_clear(row.num_0,bol1).num
        bol1 = this.num_clear(row.num_0,bol1).bol
        num %= 100000000
        row.num_1 = Math.floor(num/10000000)
        row.num_1 = this.num_clear(row.num_1,bol1).num
        bol1 = this.num_clear(row.num_1,bol1).bol
        num %= 10000000
        row.num_2 = Math.floor(num/1000000)
        row.num_2 = this.num_clear(row.num_2,bol1).num
        bol1 = this.num_clear(row.num_2,bol1).bol
        num %= 1000000
        row.num_3 = Math.floor(num/100000)
        row.num_3 = this.num_clear(row.num_3,bol1).num
        bol1 = this.num_clear(row.num_3,bol1).bol
        num %= 100000
        row.num_4 = Math.floor(num/10000)
        row.num_4 = this.num_clear(row.num_4,bol1).num
        bol1 = this.num_clear(row.num_4,bol1).bol
        num %= 10000
        row.num_5 = Math.floor(num/1000)
        row.num_5 = this.num_clear(row.num_5,bol1).num
        bol1 = this.num_clear(row.num_5,bol1).bol
        num %= 1000
        row.num_6 = Math.floor(num/100)
        row.num_6 = this.num_clear(row.num_6,bol1).num
        bol1 = this.num_clear(row.num_6,bol1).bol
        num %= 100
        row.num_7 = Math.floor(num/10)
        row.num_7 = this.num_clear(row.num_7,bol1).num
        bol1 = this.num_clear(row.num_7,bol1).bol
        num %= 10
        row.num_8 = Math.floor(num/1)
        num %= 1
        num = Math.round(num*100)
        row.num_9 = Math.floor(num/10)
        num %= 10
        row.num_10 = Math.floor(num/1)
        let num2 = row.num2
        let bol2 = true
        row.num2_0 = Math.floor(num2/100000000)
        row.num2_0 = this.num_clear(row.num2_0,bol2).num
        bol2 = this.num_clear(row.num2_0,bol2).bol
        num2 %= 100000000
        row.num2_1 = Math.floor(num2/10000000)
        row.num2_1 = this.num_clear(row.num2_1,bol2).num
        bol2 = this.num_clear(row.num2_1,bol2).bol
        num2 %= 10000000
        row.num2_2 = Math.floor(num2/1000000)
        row.num2_2 = this.num_clear(row.num2_2,bol2).num
        bol2 = this.num_clear(row.num2_2,bol2).bol
        num2 %= 1000000
        row.num2_3 = Math.floor(num2/100000)
        row.num2_3 = this.num_clear(row.num2_3,bol2).num
        bol2 = this.num_clear(row.num2_3,bol2).bol
        num2 %= 100000
        row.num2_4 = Math.floor(num2/10000)
        row.num2_4 = this.num_clear(row.num2_4,bol2).num
        bol2 = this.num_clear(row.num2_4,bol2).bol
        num2 %= 10000
        row.num2_5 = Math.floor(num2/1000)
        row.num2_5 = this.num_clear(row.num2_5,bol2).num
        bol2 = this.num_clear(row.num2_5,bol2).bol
        num2 %= 1000
        row.num2_6 = Math.floor(num2/100)
        row.num2_6 = this.num_clear(row.num2_6,bol2).num
        bol2 = this.num_clear(row.num2_6,bol2).bol
        num2 %= 100
        row.num2_7 = Math.floor(num2/10)
        row.num2_7 = this.num_clear(row.num2_7,bol2).num
        bol2 = this.num_clear(row.num2_7,bol2).bol
        num2 %= 10
        row.num2_8 = Math.floor(num2/1)
        num2 %= 1
        num2 = Math.round(num2*100)
        row.num2_9 = Math.floor(num2/10)
        num2 %= 10
        row.num2_10 = Math.floor(num2/1)
      },
      handleDelete(index, row) {
        // console.log(index, row);
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {//金额input框的合并
          if (columnIndex === 27||columnIndex === 28) {
            return [1, 11];
          }
      },
      getSummaries(param) {//合计计算
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 1) {
            sums[index] = '合计'
            return
          }
          if(index>1 && index<5){
            sums[index] = ''
            return
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += '';
          } else {
            sums[index] = '';
          }
        });
        let startNum = 5
        let new_sums = this.carry_num(sums,startNum)
        return new_sums;
      },
      carry_num(sums,startNum){//合计进位处理
        //本币借方
        let num = sums[startNum]*100000000
        let bol1 = true//判断0
        num += sums[startNum+1]*10000000
        num += sums[startNum+2]*1000000
        num += sums[startNum+3]*100000
        num += sums[startNum+4]*10000
        num += sums[startNum+5]*1000
        num += sums[startNum+6]*100
        num += sums[startNum+7]*10
        num += sums[startNum+8]*1
        num += sums[startNum+9]*0.1
        num += sums[startNum+10]*0.01
        sums[startNum] = Math.floor(num/100000000)
        sums[startNum] = this.num_clear(sums[startNum],bol1).num
        bol1 = this.num_clear(sums[startNum],bol1).bol
        num %= 100000000
        sums[startNum+1] = Math.floor(num/10000000)
        sums[startNum+1] = this.num_clear(sums[startNum+1],bol1).num
        bol1 = this.num_clear(sums[startNum+1],bol1).bol
        num %= 10000000
        sums[startNum+2] = Math.floor(num/1000000)
        sums[startNum+2] = this.num_clear(sums[startNum+2],bol1).num
        bol1 = this.num_clear(sums[startNum+2],bol1).bol
        num %= 1000000
        sums[startNum+3] = Math.floor(num/100000)
        sums[startNum+3] = this.num_clear(sums[startNum+3],bol1).num
        bol1 = this.num_clear(sums[startNum+3],bol1).bol
        num %= 100000
        sums[startNum+4] = Math.floor(num/10000)
        sums[startNum+4] = this.num_clear(sums[startNum+4],bol1).num
        bol1 = this.num_clear(sums[startNum+4],bol1).bol
        num %= 10000
        sums[startNum+5] = Math.floor(num/1000)
        sums[startNum+5] = this.num_clear(sums[startNum+5],bol1).num
        bol1 = this.num_clear(sums[startNum+5],bol1).bol
        num %= 1000
        sums[startNum+6] = Math.floor(num/100)
        sums[startNum+6] = this.num_clear(sums[startNum+6],bol1).num
        bol1 = this.num_clear(sums[startNum+6],bol1).bol
        num %= 100
        sums[startNum+7] = Math.floor(num/10)
        sums[startNum+7] = this.num_clear(sums[startNum+7],bol1).num
        bol1 = this.num_clear(sums[startNum+7],bol1).bol
        num %= 10
        sums[startNum+8] = Math.floor(num/1)
        num %= 1
        // sums[13] = Math.floor(num/0.1)
        // num %= 0.1
        // sums[14] = Math.floor(num/0.01)
        num = Math.round(num*100)
        sums[startNum+9] = Math.floor(num/10)
        num %= 10
        sums[startNum+10] = Math.floor(num/1)
        //本币贷方
        let num2 = sums[startNum+11]*100000000
        let bol2 = true
        num2 += sums[startNum+12]*10000000
        num2 += sums[startNum+13]*1000000
        num2 += sums[startNum+14]*100000
        num2 += sums[startNum+15]*10000
        num2 += sums[startNum+16]*1000
        num2 += sums[startNum+17]*100
        num2 += sums[startNum+18]*10
        num2 += sums[startNum+19]*1
        num2 += sums[startNum+20]*0.1
        num2 += sums[startNum+21]*0.01
        sums[startNum+11] = Math.floor(num2/100000000)
        sums[startNum+11] = this.num_clear(sums[startNum+11],bol2).num
        bol2 = this.num_clear(sums[startNum+11],bol2).bol
        num2 %= 100000000
        sums[startNum+12] = Math.floor(num2/10000000)
        sums[startNum+12] = this.num_clear(sums[startNum+12],bol2).num
        bol2 = this.num_clear(sums[startNum+12],bol2).bol
        num2 %= 10000000
        sums[startNum+13] = Math.floor(num2/1000000)
        sums[startNum+13] = this.num_clear(sums[startNum+13],bol2).num
        bol2 = this.num_clear(sums[startNum+13],bol2).bol
        num2 %= 1000000
        sums[startNum+14] = Math.floor(num2/100000)
        sums[startNum+14] = this.num_clear(sums[startNum+14],bol2).num
        bol2 = this.num_clear(sums[startNum+14],bol2).bol
        num2 %= 100000
        sums[startNum+15] = Math.floor(num2/10000)
        sums[startNum+15] = this.num_clear(sums[startNum+15],bol2).num
        bol2 = this.num_clear(sums[startNum+15],bol2).bol
        num2 %= 10000
        sums[startNum+16] = Math.floor(num2/1000)
        sums[startNum+16] = this.num_clear(sums[startNum+16],bol2).num
        bol2 = this.num_clear(sums[startNum+16],bol2).bol
        num2 %= 1000
        sums[startNum+17] = Math.floor(num2/100)
        sums[startNum+17] = this.num_clear(sums[startNum+17],bol2).num
        bol2 = this.num_clear(sums[startNum+17],bol2).bol
        num2 %= 100
        sums[startNum+18] = Math.floor(num2/10)
        sums[startNum+18] = this.num_clear(sums[startNum+18],bol2).num
        bol2 = this.num_clear(sums[startNum+18],bol2).bol
        num2 %= 10
        sums[startNum+19] = Math.floor(num2/1)
        num2 %= 1
        // sums[24] = Math.floor(num2/0.1)
        // num2 %= 0.1
        // sums[25] = Math.floor(num2/0.01)
        num2 = Math.round(num2*100)
        sums[startNum+20] = Math.floor(num2/10)
        num2 %= 10
        sums[startNum+21] = Math.floor(num2/1)
        return sums
      },
      headClick (column, event) {
        let $el = this.$jq(event.target).parents('.addBtn')
        if($el.length>0){
          this.addNewData()
        }
      },
      addNewData () {
        let newData = {
          zy:"",
          hjkm:"",
          bz:"",
          num:0,
          num_0:'',
          num_1:'',
          num_2:'',
          num_3:'',
          num_4:'',
          num_5:'',
          num_6:'',
          num_7:'',
          num_8:0,
          num_9:0,
          num_10:0,
          num2:0,
          num2_0:'',
          num2_1:'',
          num2_2:'',
          num2_3:'',
          num2_4:'',
          num2_5:'',
          num2_6:'',
          num2_7:'',
          num2_8:0,
          num2_9:0,
          num2_10:0
        }
        this.tableData3.push(newData)
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      pzclick (event) {
        //用event.target firefox没有srcElement
        let $el = this.$jq(event.target).parents('.el-table__row')
        if($el.length==0){
          this.$refs.singleTable.setCurrentRow()
        }
      },
      num_clear (num,bol){
        if(num==0&&bol==true){
          num = ''
        }else{
          bol = false
        }
        return {
          num:num,
          bol:bol
        }
      },
      bzAdd () {
        this.$prompt('请输入币种信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '币种信息不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '已录入币种: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    @import '../style/mixin.less';
    .wrapper{
      border:1px solid #c0bfbf;
      border-radius: 4px;
      margin:10px 10px 10px 10px;
      .top{
        min-height: 36px;
        background: #e8e7e7;
        border-bottom:1px solid #c0bfbf;
        .top_text{
          text-align: center;
          font-weight: bold;
          line-height: 36px;
        }
      }
      .content1{
        padding-top: 10px;
        .el-input{
          max-width:200px;
        }
        .fj{
          .el-input{
            width:100%;
          }
        }
      }
      .content2{
        height:320px;
      }
      .content3{
        min-height:50px;
        background:#f0f0f0;
        border-top:1px solid #c0bfbf;
        padding-top:20px;
      }
    }
    .tb-edit{
      .cell{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .el-input,.el-select,.el-input-number,.num1,.num2{
        display: none;
      }
      .red-line{
        border-right:1px solid #fa714c;
      }
      .blue-line{
        border-right:1px solid #99bbe8;
      }
      .black-line{
        border-right:1px solid #919090;
      }
      .current-row{
        .text_edit{
          .cell{
            padding:0;
          }
        }
        .num1{
          display:table-cell;
          border-right:1px solid #919090;
          .cell{
            padding:0;
          }
        }
        .num2{
          display:table-cell;
          .cell{
            padding:0;
          }
        }
        .num_edit{
          display:none;
        }
        .el-input-number{
          width:30px;
          display:block;
          .el-input-number__decrease,.el-input-number__increase{
            width:10px;
          }
          .el-input__inner{
            width:20px;
            padding:0;
          }
        }
        .el-input,.el-select{
          display: block;
        }
        .el-input+span,.el-select+span,.el-input-number+span{
          display: none
        }
      }
    }

    .el-table thead.is-group th{
      background:#fff;
      padding:0;
    }
    .el-table__footer-wrapper tbody td, .el-table__header-wrapper tbody td{
      background: #fff;
    }
    .el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td, .el-table__body tr.hover-row.el-table__row--striped.current-row>td, .el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td{
      background: #f5f5f5;
    }
    .el-table__row{
      height:29px;
    }
    /deep/ .addBtn{
      cursor: pointer;
    }
</style>
