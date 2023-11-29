<template>
    <div class="echarts" ref="leftEcharts">
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
const props = defineProps(['txData'])

onMounted(() => {
    initEcharts()
})
onUnmounted(() => {
})
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
            data: ["Y1", 'Y2'],
            textStyle: {
                color: ["#19a3df", "#d5b00a", "#3fb594", "#db6c72", "#585eaa", "#d5b00a", "#3fb594", '#db6c72'],
                fontSize: 10
            }
        },
        grid: {
            top: "12%",
            bottom: '22%',
            left: '8%',
            right: '6%'
        },
        xAxis: {
            data: props.txData.xData,
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
                color: '#a6bde9'
            },
        },
        yAxis: [
            {
                name: 'Y1',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 9,
                    color: '#a6bde9'
                },
            },
            {
                name: 'Y2',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 9,
                    color: '#a6bde9'
                },
            },
            // {
            //     name: 'Y2',
            //     type: 'value',
            //     splitLine: {
            //         show: false
            //     },
            //     axisLabel: {
            //         fontSize: 9,
            //         color: '#a6bde9'
            //     },
            // }
        ],
        series: [
            {
                name: 'Y1',
                data: props.txData.y1Data,
                type: "line",
                symbol: "circle",
                symbolSize: 6,
                showSymbol: false,
                zlevel: 3,
                xAxisIndex: 0,
                yAxisIndex: 0,
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
                name: 'Y1',
                data: props.txData.y2Data,
                type: "line",
                symbol: "circle",
                symbolSize: 6,
                showSymbol: false,
                zlevel: 3,
                xAxisIndex: 0,
                yAxisIndex: 0,
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
                name: 'Y2',
                data: props.txData.y3Data,
                type: "line",
                symbol: "circle",
                symbolSize: 6,
                showSymbol: false,
                zlevel: 3,
                xAxisIndex: 0,
                yAxisIndex: 1,
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
            }
        ]
    }
})
let initEcharts = () => {
    if (first) { myChart = echarts.init(leftEcharts.value as any); }
    first = false
    state.option && myChart.setOption(state.option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
</script>

<style lang="less" scoped>
.echarts {
    margin-left: 3%;
    width: 94%;
    height: 78%;
    margin-top: 1%;
    // background-color: aqua;
}
</style>