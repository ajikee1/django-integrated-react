"use strict";

var chart = document.getElementById('chart');
var myChart = echarts.init(chart);
var option = {
  title: { text: 'ECharts Sample' },
  tooltip: { },
  legend: { data: [ 'Sales' ] },
  xAxis: { data: [ "shirt", "cardign", "chiffon shirt", "pants", "heels", "socks" ] },
  yAxis: { },
  series: [{
    name: 'Sales',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};
myChart.setOption(option);