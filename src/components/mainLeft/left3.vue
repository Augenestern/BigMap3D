<template>
    <div class='nBox'>
        <div class="lineAndcircle">
            <span style="color: #eee;">氨逃逸</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <div class="echarts" ref="leftEcharts">
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

onMounted(() => {
    initEcharts()
})
onUnmounted(() => {
})
//数据
let xData = ['11-01 12:00', '11-01 13:00', '11-01 14:00', '11-01 15:00', '11-01 16:00', '11-01 17:00', '11-01 18:00', '11-01 19:00', '11-01 20:00', '11-01 21:00', '11-01 22:00', '11-01 23:00', '11-02 00:00', '11-02 01:00', '11-02 02:00', '11-02 03:00', '11-02 04:00', '11-02 05:00', '11-02 06:00', '11-02 07:00', '11-02 08:00', '11-02 09:00', '11-02 10:00', '11-02 11:00']
let y1Data = [6, 4, 3, 4, 4, 4, 6, 3, 6, 2, 3, 5, 4, 4, 6, 3, 6, 2, 3, 4, 4, 4, 6, 3]

//echarts
let myChart: any = null
let first = true
let leftEcharts: any = ref(null)

//颜色数组
let colors: any = [
    ["#19a3df", "rgba(88,255,255,0.3)", 'rgba(88,255,255,0)'],
    ["#d5b00a", "rgba(255,188,13, 0.4)", "rgba(255,188,13, 0)"],
    ["#3fb594", "rgba(79, 224, 171,.2)", "rgba(79, 224, 171,0)"],
    ["#db6c72", "rgba(218, 105, 111,0.2)", "rgba(218, 105, 111,0)"],
    ["#585eaa", "rgba(88, 94, 170,0.3)", "rgba(88, 94, 170,0)"],
    ["#d5b00a", "rgba(255,188,13, 0.2)", "rgba(255,188,13, 0)"],
    ["#3fb594", "rgba(79, 224, 171,.2)", "rgba(79, 224, 171,0)"],
    ['#db6c72', 'rgba(218, 105, 111,0.2)', 'rgba(218, 105, 111,0)'],
]
let initEcharts = () => {
    if (first) { myChart = echarts.init(leftEcharts.value as any); }
    first = false
    let state = reactive({
        option: {
            tooltip: {
                trigger: "axis",
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (params: any) {
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal +=
                            "<br/>" + params[i].marker + params[i].seriesName + '  ' + params[i].value.toFixed(3) + "A";
                    }
                    return relVal;
                }
            },
            // legend: {
            //     show: true,
            //     // icon: "rect",
            //     right: 20,
            //     itemWidth: 10,
            //     itemHeight: 6,
            //     data: ["线1", '线2'],
            //     textStyle: {
            //         color: ["#19a3df", "#d5b00a", "#3fb594", "#db6c72", "#585eaa", "#d5b00a", "#3fb594", '#db6c72'],
            //         fontSize: 10
            //     }
            // },
            grid: {
                top: "12%",
                bottom: '18%',
                left: '8%',
                right: '3%'
            },
            xAxis: {
                data: xData,
                type: "category",
                boundaryGap: false,
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: "auto",
                    // formatter: function (value: any) {
                    //     return value.slice(1,2)
                    // },
                    fontSize: 9,
                    color: '#a6bde9'
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 9,
                    color: '#a6bde9'
                },
            },
            series: [
                {
                    name: '电流',
                    data: y1Data,
                    type: "line",
                    symbol: "circle",
                    symbolSize: 6,
                    showSymbol: false,
                    zlevel: 3,
                    itemStyle: {
                        //圆点颜色
                        color: colors[0][0],
                        // borderColor: "#a3c8d8",
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            //线条颜色
                            color: colors[0][0],
                        },
                    },
                    smooth: false,

                    //区域颜色
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: colors[0][1],
                                    },
                                    {
                                        offset: 0.9,
                                        color: colors[0][2],
                                    },
                                ],
                                false
                            ),
                        },
                    },
                }
            ]
        }
    })
    state.option && myChart.setOption(state.option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

</script>
<style lang="less" scoped>
@import '../lineAndCircle.css';

.nBox {
    width: 100%;
    height: 100%;
}

.echarts {
    margin-left: 3%;
    width: 94%;
    height: 80%;
    // background-color: aqua;
}
</style>