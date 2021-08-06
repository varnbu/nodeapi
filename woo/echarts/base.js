let chartDom = document.getElementById('main');
let myChart = echarts.init(chartDom);
console.log(list)
let yData = data.map(it => {
    return it / 820
})
let xData = yData.map((it, index) => {
    return index/500
})

 option = {
    animation: true,
    xAxis:[ {
        type: 'category',
        data: xData,
        minorSplitLine: {
            show: true,
            minorTick: {
                show: true
            },
            lineStyle: {
                color: "#ddd"
            }
        },
        splitLine: {
            lineStyle: {
                color: "#11ee22"
            }
        },
    }
    ],
    yAxis: [
        {
            type: 'value',
            minorTick: {
                show: true
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: "#ddd"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#013199"
                }
            },
        },

    ],
    series: [{
        data: yData,
        smooth: true,
        showSymbol: false,
        type: 'line'
    }],
};

option && myChart.setOption(option);
