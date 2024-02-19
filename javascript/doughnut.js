
// 基于准备好的dom，初始化echarts实例
let dom = document.getElementById("doughnut-chart");
let myChart = echarts.init(dom);

let option = {
    title: {
        "text": "占比分析",
        "subtext": "",
        "x": "center",
        "y": "center"
    },
    legend:{
        orient: 'vertical',
        left: 10,
        top: 5,
        textStyle: {
            fontSize: 16,
        },
    },
    dataset:{
        source: [
            ["套餐A",30],
            ["套餐B",30],
            ["套餐C",20],
            ["套餐D",10],
            ["套餐E",270]
        ]
    },
  series: [{
        "name": "",
        "type": "pie",
        "radius": ["70%", "100%"],
        "label": {
            "normal": {
                "show": true,
                "textStyle": {
                    "fontSize": 20 }
            },
            "emphasis": {
                "show": true
            }
        },
    }]
};
myChart.setOption(option);