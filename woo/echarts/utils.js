function createGrid (it, index) {
    return {
        show: false,
        top: index * 100,
        height:100,
        left: 80,
        right: 20
    }
}

function createXAes (it, index) {
    return {
        type: 'value',
        show: true,
        gridIndex: index,
        minorTick:{
            show: true,
        },
        axisLine:{
            show:index===6
        },
        splitLine:{
            show:true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#999',
                width:1,
                type: 'solid'
            }
        },
        minorSplitLine:{
            show:true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#ddd',
                width:1,
                type: 'solid'

            }
        }
    }
}

function createYAes (it, index) {
    return {
        type: 'value',
        show: true,
        gridIndex: index,
        minorTick:{
            show: true,
        },
        splitLine:{
            show:true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#999',
                width:1,
                type: 'solid'
            }
        },
        minorSplitLine:{
            show:true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#ddd',
                width:1,
                type: 'solid'

            }
        }
    }
}

function createSeries (it, index,data) {
    return {
        name: it.LeadType,
        type: 'line',
        xAxisIndex: index,
        yAxisIndex: index,
        data: data,
        showSymbol: false,
        itemStyle: {
            color:'#333'
        }
    }
}

function createTitle (it, index) {
    return {
        textAlign: 'center',
        text: it.LeadType,
        left:12,
        top: index * 100+50-12,
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
        }
    }
}
