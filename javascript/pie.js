
// 基于准备好的dom，初始化echarts实例
let pie_dom = document.getElementById("pie-chart");
let pieChart = echarts.init(pie_dom);

let pie_option = {
    title: {
        "text": "",
        "subtext": "",
        "x": "center",
        "y": "center"
    },
    legend:{
        orient: 'vertical',
        right: 10,
        top: 5,
        textStyle: {
            fontSize: 16,
        },
    },
    dataset:{
        source: [
            ["套餐A",240],
            ["套餐B",10],
            ["套餐C",20],
            ["套餐D",50],
            ["套餐E",40]
        ]
    },
  series: [{
        "name": "",
        "type": "pie",
        "radius": ["0%", "100%"],
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
pieChart.setOption(pie_option);