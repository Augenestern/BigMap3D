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
let xData = ['01', '02', '03', '04', '05', '06', '07', '08']
let y1Data = [60, 22, 33, 1, 44, 4, 6, 34]
let y2Data = [23, 2, 3, 13, 24, 14, 6, 4]

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
            },
            legend: {
                show: true,
                // icon: "rect",
                right: 20,
                itemWidth: 10,
                itemHeight: 6,
                data: ["线1", '线2'],
                textStyle: {
                    color: ["#19a3df", "#d5b00a", "#3fb594", "#db6c72", "#585eaa", "#d5b00a", "#3fb594", '#db6c72'],
                    fontSize: 10
                }
            },
            grid: {
                top: "12%",
                bottom: '18%',
                left: '8%',
                right: '0%'
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
                    //     return value.slice(5, 10)
                    // },
                    fontSize: 9,
                    color: '#fff'
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }, 
                axisLabel: {
                    fontSize: 9,
                    color: '#fff'
                },
            },
            series: [
                {
                    name: '线1',
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
                },
                {
                    name: '线2',
                    data: y2Data,
                    type: "line",
                    symbol: "circle",
                    symbolSize: 6,
                    showSymbol: false,
                    zlevel: 3,
                    itemStyle: {

                        //圆点颜色
                        color: colors[1][0],
                        // borderColor: "#a3c8d8",
                    },
                    lineStyle: {
                        normal: {
                            width: 2,
                            //线条颜色
                            color: colors[1][0],
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
                                        color: colors[1][1],
                                    },
                                    {
                                        offset: 0.9,
                                        color: colors[1][2],
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
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