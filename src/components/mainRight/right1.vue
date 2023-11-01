<template>
    <div class='nBox'>
        <div class="lineAndcircle" style="padding-top: 3%;">
            <span style="color: #eee;">除尘、脱硫、脱硝</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="除尘" name="除尘">
            </el-tab-pane>
            <el-tab-pane label="脱硫" name="脱硫">
            </el-tab-pane>
            <el-tab-pane label="脱硝" name="脱硝">
            </el-tab-pane>
        </el-tabs>
        <div class="echarts" ref="leftEcharts">
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { getEleData } from "../../api/environment/api";

const activeName = ref('除尘')
watch(activeName, (newval) => {
    if (newval == '脱硫') {
        state.option.legend.show = false
        state.option.series[0].data = tuoLiuData.y1Data
        state.option.xAxis.data = tuoLiuData.xData
        if (state.option.series[1]) {
            state.option.series.pop()
            state.option.series.pop()
        }
    } else if (newval == "脱硝") {
        state.option.legend.show = true
        state.option.xAxis.data = tuoXiaoData.xData
        state.option.series[0].data = tuoXiaoData.y1Data
        state.option.series[1] =
        {
            name: 'Y1',
            data: tuoXiaoData.y2Data,
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            showSymbol: false,
            zlevel: 3,
            xAxisIndex: 0,
            yAxisIndex: 1,
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
        state.option.series[2] =
        {
            name: 'Y2',
            data: tuoXiaoData.y3Data,
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

    } else if (newval == '除尘') {
        state.option.legend.show = false
        state.option.series[0].data = chuChenData.y1Data
        state.option.xAxis.data = chuChenData.xData
        if (state.option.series[1]) {
            state.option.series.pop()
            state.option.series.pop()
        }
    }
    myChart.dispose();
    myChart = echarts.init(leftEcharts.value as any);
    state.option && myChart.setOption(state.option);
})

const getData = () => {
    let params = {
        sensorCode: "c3",
        currPage: "1",
        pageSize: "12",
    }
    getEleData(params).then((res)=>{
        console.log(res.data.data.data);
    })
}
onMounted(() => {
    getData()
    // echData = chuChenData
    initEcharts()
})
onUnmounted(() => {
})
//数据
let chuChenData = {
    xData: ['01', '02', '03', '04', '05', '06', '07', '08'],
    y1Data: [16, 12, 13, 11, 14, 4, 6, 4],
}
let tuoLiuData = {
    xData: ['01', '02', '03', '04', '05', '06', '07', '08'],
    y1Data: [6, 22, 33, 1, 44, 4, 6, 34],
}
let tuoXiaoData = {
    xData: ['01', '02', '03', '04', '05', '06', '07', '08'],
    y1Data: [30, 22, 33, 1, 44, 4, 6, 34],
    y2Data: [23, 2, 3, 13, 24, 14, 6, 4],
    y3Data: [3, 20, 13, 13, 14, 14, 6, 4],
}

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
            show: false,
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
            data: chuChenData.xData,
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
                name: 'Y3',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 9,
                    color: '#a6bde9'
                },
            }
        ],
        series: [
            {
                name: 'Y1',
                data: chuChenData.y1Data,
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
            // {
            //     name: 'Y2',
            //     data: echData.y2Data,
            //     type: "line",
            //     symbol: "circle",
            //     symbolSize: 6,
            //     showSymbol: false,
            //     zlevel: 3,
            //     xAxisIndex: 0,
            //     yAxisIndex: 1,
            //     itemStyle: {

            //         //圆点颜色
            //         color: colors[1][0],
            //         // borderColor: "#a3c8d8",
            //     },
            //     lineStyle: {
            //         normal: {
            //             width: 2,
            //             //线条颜色
            //             color: colors[1][0],
            //         },
            //     },
            //     smooth: false,

            //     //区域颜色
            //     areaStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(
            //                 0,
            //                 0,
            //                 0,
            //                 1,
            //                 [
            //                     {
            //                         offset: 0,
            //                         color: colors[1][1],
            //                     },
            //                     {
            //                         offset: 0.9,
            //                         color: colors[1][2],
            //                     },
            //                 ],
            //                 false
            //             ),
            //         },
            //     },
            // },
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
@import '../lineAndCircle.css';

.nBox {
    width: 100%;
    height: 100%;
}

.echarts {
    margin-left: 3%;
    width: 94%;
    height: 78%;
    margin-top: 1%;
    // background-color: aqua;
}

// el-tabs切换按钮样式
.el-tabs {
    z-index: 100;
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translateX(-50%);

    /deep/ .el-tabs__item {
        padding: 5px 10px;
        font-size: 12px;
        color: #a6bde9;
    }

    /deep/ .el-tabs__item:hover {
        color: #00efff;
    }

    /deep/ .el-tabs__item.is-active {
        color: #00efff;
    }

    /deep/ .el-tabs__active-bar {
        display: none;
        background-color: #00efff;
    }

    /deep/ .el-tabs__nav-wrap::after {
        background-color: transparent;
    }
}
</style>