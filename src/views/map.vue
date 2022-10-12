<template>
  <div class="managingPatientSize">
    <el-row>
      <el-col :span="6">1</el-col>
      <el-col :span="12">
        <div id="china-map"></div>
      </el-col>
      <el-col :span="6">1</el-col>
    </el-row>
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/chart/pie')
require('echarts/lib/component/markLine')
require('echarts/lib/component/geo')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/map')
export default {
  data() {
    return {}
  },
  mounted() {
    this.drawCharts()
  },
  methods: {
    drawCharts() {
      // 基于准备好的dom，初始化echarts实例
      var chinaMap = echarts.init(document.getElementById('china-map'))
      window.onresize = chinaMap.resize // 窗口或框架被调整大小时执行chinaMap.resize
      chinaMap.setOption({
        // 进行相关配置
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['orangered', '#FF9B52', '#FFD068'],
        },
        geo: {
          // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: '#fff',
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#293171',
              borderWidth: '2',
              areaColor: '#0A0F33',
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo', // 对应上方配置
          },
          {
            name: '启动次数', // 浮动框的标题
            type: 'map',
            geoIndex: 0,
            data: [
              {
                name: '北京',
                value: 599,
              },
              {
                name: '上海',
                value: 142,
              },
              {
                name: '黑龙江',
                value: 44,
              },
              {
                name: '深圳',
                value: 92,
              },
              {
                name: '湖北',
                value: 810,
              },
              {
                name: '四川',
                value: 453,
              },
              {
                name: '新疆',
                value: 666,
              },
            ],
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.managingPatientSize {
  height: 100%;
  background-color: #111b41;
  color: #fff;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      position: relative;
      #china-map {
        height: 100%;
      }
    }
  }
}
</style>
