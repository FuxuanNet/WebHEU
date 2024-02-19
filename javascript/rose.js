
// 基于准备好的dom，初始化echarts实例
let rose_dom = document.getElementById("rose-chart");
let roseChart = echarts.init(rose_dom);

let rose_option = {
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
            ["套餐A",40],
            ["套餐B",45],
            ["套餐C",50],
            ["套餐D",55],
            ["套餐E",60],
            ["套餐F",65],
            ["套餐G",60]
        ]
    },
  series: [{
        "name": "",
        "type": "pie",
        "roseType": 'area',
        "radius": ["0%", "100%"],
        "label": {
            "normal": {
                "show": true,
                "textStyle": {
                    "fontSize": 20 }
            },
            "emphasis": {
                "show": true
            },
        },
    }]
};
roseChart.setOption(rose_option);