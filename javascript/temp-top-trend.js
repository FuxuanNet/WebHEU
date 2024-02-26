// 基于准备好的dom，初始化echarts实例
let trend_dom = document.getElementById("trend-chart");
let trendChart = echarts.init(trend_dom);
let tempData = {     // 提供模版数据
    "yAxis": [
        "  不负青山不负人 ",
        "  大范围雨雪天气即将来袭 ",
        "  林志玲林志颖是幼儿园同学 ",
        "  一趟趟务工返岗专列向着春天进发 ",
        "  泽连斯基首次公布乌军阵亡人数 "
    ],
    "xAxis": [
        " 4953",
        " 4995",
        " 4801",
        " 4778",
        " 4615"
    ]
}

function getTrend(){
var option = {
    title: {
    text: '百度热搜榜',
  },
  xAxis: {
      name:"热搜指数",
      nameTextStyle: {
        fontSize: 16, // 设置字体大小为 14px
    },
    max: 'dataMax',
    axisLabel: {
            fontSize: 16 // 设置 x 轴标签字体大小为 14px
        }
  },
  yAxis: {
      name:"热搜榜Top5",
      nameLocation: 'start',
      nameTextStyle: {
        fontSize: 16, // 设置字体大小为 14px
    },
    type: 'category',
    data: tempData["yAxis"], //dataSet["yAxis"],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
      axisLabel: {
         fontSize: 16, // 设置 x 轴标签字体大小为 14px
      formatter:function(value){  //设置标签显示格式,10字换行
          return value.replace(/(.{10})/g, "$1\n");}
    },
  },
  series: [
    {
      realtimeSort: true,
      type: 'bar',
      data: tempData["xAxis"],    //dataSet["xAxis"],
        animationDelay: function (idx) {
            // 设置每个条形图的动画延迟时间为100ms
            return idx * 100;
        },
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
          formatter: `{c}w`,  //设置单位为万
        fontSize: 20
      },
    }
  ],
  animationDuration: 1000,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
trendChart.setOption(option);
}
getTrend();
setInterval(getTrend,300*1000);    //设置定时器,5min更新一次
trendChart.on("click",function (param) {
    window.open(`https://www.baidu.com/s?wd=${param.name}`, '_blank');
})  //点击数据栏跳转到具体页面