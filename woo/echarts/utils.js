function createGrid (it, index, DEVIDE_VALUE,LIST_lENGTH) {
    return {
        show: false,
        top: index * 100 + 50,
        height: 100,
        left: 80,
        right: 20
    }
}

function createXAes (it, index, DEVIDE_VALUE,LIST_lENGTH) {
    return {
        type: 'value',
        show: true,
        gridIndex: index,
        minorTick: {
            show: true,
        },
        axisLabel: {
            show: index === LIST_lENGTH-1
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#999',
                width: 1,
                type: 'solid'
            }
        },
        minorSplitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#ddd',
                width: 1,
                type: 'solid'
            }
        }
    }
}

function createYAes (it, index, DEVIDE_VALUE,LIST_lENGTH) {
    return {
        type: 'value',
        show: true,
        gridIndex: index,
        minorTick: {
            show: true,
        },
        axisLabel: {
            showMinLabel:true,
            showMaxLabel:index===0,
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#999',
                width: 1,
                type: 'solid'
            }
        },
        min: (Number(it.RangeMin) / DEVIDE_VALUE).toFixed(0
        ),
        max: (Number(it.RangeMax) / DEVIDE_VALUE).toFixed(0
        ),
        minorSplitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#ddd',
                width: 1,
                type: 'solid'

            }
        }
    }
}

function createSeries (it, index, data, DEVIDE_VALUE,LIST_lENGTH) {
    return {
        name: it.LeadType,
        type: 'line',
        xAxisIndex: index,
        yAxisIndex: index,
        data: data,
        showSymbol: false,
        itemStyle: {
            color: '#333'
        }
    }
}

function createTitle (it, index, DEVIDE_VALUE,LIST_lENGTH) {
    return {
        textAlign: 'center',
        text: it.LeadType,
        left: 12,
        top: index * 100 + 100 - 12,
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
        }
    }
}
