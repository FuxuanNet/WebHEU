let rain_dom = document.getElementById("rainfall-chart");
let rainChart = echarts.init(rain_dom);
let dataSet = {
  "xAxis": [ 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
  "yAxis": [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
}

let rain_option = {
  title: {
    text: 'Rainfall vs Evaporation',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Rainfall', 'Evaporation']
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      name:"月份",
      type: 'category',
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ],
  yAxis: [
    {
      name:"降雨量/mm",
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Rainfall',
      type: 'bar',
      data: dataSet["xAxis"] ,
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
    },
    {
      name: 'Evaporation',
      type: 'bar',
      data: dataSet["yAxis"],
      markPoint: {
        data: [
          { name: 'Max', value: 182.2, xAxis: 7, yAxis: 182.2 },
          { name: 'Min', value: 2.3, xAxis: 11, yAxis: 2.3 }
        ]
      },
    }
  ]
};

rainChart.setOption(rain_option);