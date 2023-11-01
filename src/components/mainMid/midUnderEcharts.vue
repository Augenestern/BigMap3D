<template>
    <div style="width: 100%;height: 100%;position: relative;">
        <div class="echarts" ref="midEcharts">
        </div>
        <span class="echTitle">{{ chartName[props.indexSign] }}</span>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
const props = defineProps(['echDatax', 'echDatay', 'indexSign'])

onMounted(() => {
    // console.log(props.echDatax, props.echDatay);
    setTimeout(() => {
        initEcharts()
    }, 1000);
    setInterval(()=>{
        myChart.dispose()
        myChart = echarts.init(midEcharts.value as any);
        state.option && myChart.setOption(state.option);
    },3000)
})
onUnmounted(() => {
    myChart.dispose()
})
//数据


//echarts
let myChart: any = null
let first = true
let midEcharts: any = ref(null)
let chartName: any = ref(['废气', '烟尘', '烟气流速', '烟气湿度', '烟气温度', '烟气压力', '一氧化氮', '氮氧化物', '氧含量', '二氧化硫'])
let chartUnit: any = ref(['立方米/秒', '毫克/立方米', '米/秒', '%', '摄氏度', '千帕', '毫克/立方米', '毫克/立方米', '%', '毫克/立方米'])
//颜色数组
let colors: any = [
    ["#19a3df", "rgba(88,255,255,0.3)", 'rgba(88,255,255,0)'],
    ["#d5b00a", "rgba(255,188,13, 0.4)", "rgba(255,188,13, 0)"],
    ["#3fb594", "rgba(79, 224, 171,.2)", "rgba(79, 224, 171,0)"],
    ["#db6c72", "rgba(218, 105, 111,0.2)", "rgba(218, 105, 111,0)"],
    ["#585eaa", "rgba(88, 94, 170,0.3)", "rgba(88, 94, 170,0)"],
    // ["#d5b00a", "rgba(255,188,13, 0.2)","rgba(255,188,13, 0)"],
    // ["#3fb594", "rgba(79, 224, 171,.2)","rgba(79, 224, 171,0)"],
    // ['#db6c72', 'rgba(218, 105, 111,0.2)','rgba(218, 105, 111,0)'],

    ["#19a3df", "rgba(88,255,255,0.3)", 'rgba(88,255,255,0)'],
    ["#d5b00a", "rgba(255,188,13, 0.4)", "rgba(255,188,13, 0)"],
    ["#3fb594", "rgba(79, 224, 171,.2)", "rgba(79, 224, 171,0)"],
    ["#db6c72", "rgba(218, 105, 111,0.2)", "rgba(218, 105, 111,0)"],
    ["#585eaa", "rgba(88, 94, 170,0.3)", "rgba(88, 94, 170,0)"],
]
let index = props.indexSign;
let state:any
let initEcharts = () => {
    if (first) { myChart = echarts.init(midEcharts.value as any); }
    first = false
    state = reactive({
        option: {
            grid: {
                top: "20px",
                bottom: '20px',
                left: '10px',
                right: '10px'
            },
            tooltip: {
                trigger: "axis",
                textStyle: {
                    fontSize: 12,
                },
                // axisPointer: {
                //     lineStyle: {
                //         color: {
                //             type: "linear",
                //             x: 0,
                //             y: 0,
                //             x2: 0,
                //             y2: 1,
                //             colorStops: [
                //                 {
                //                     offset: 0,
                //                     color: "rgba(0, 255, 233,0)",
                //                 },
                //                 {
                //                     offset: 0.5,
                //                     color: "rgba(255, 255, 255,1)",
                //                 },
                //                 {
                //                     offset: 1,
                //                     color: "rgba(0, 255, 233,0)",
                //                 },
                //             ],
                //             global: false,
                //         },
                //     },
                // },
                formatter: function (params: any) {
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal +=
                            "<br/>" + params[i].marker + params[i].value + chartUnit.value[props.indexSign];
                    }
                    return relVal;
                },
            },
            xAxis: {
                show: true,
                axisLabel: {
                    show: false,
                },
                type: "category",
                axisTick: { show: false },
                boundaryGap: false,
                data: props.echDatax,
                //设置轴线的属性
                // axisLine: {
                //     lineStyle: {
                //         color: "#a6bde9",
                //     },
                // },
            },
            yAxis: {

                show: false,
                boundaryGap: false,
                type: "value",
                // axisLabel: {
                //     textStyle: {
                //         color: "#a6bde9",
                //         fontSize: 10,
                //     },
                // },
                // nameTextStyle: {
                //     color: "#fff",
                //     fontSize: 12,
                //     lineHeight: 40,
                // },
                splitLine: {
                    show: false,
                    // lineStyle: {
                    //   color: "#243753",
                    // },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#283352",
                    },
                },
                axisTick: {
                    show: false,
                },
            },
            series: [
                {
                    data: props.echDatay,
                    // data: props.echData,
                    type: "line",
                    symbol: "circle",
                    symbolSize: 6,
                    showSymbol: false,
                    zlevel: 3,
                    itemStyle: {
                        //圆点颜色
                        color: colors[index][0],
                        // borderColor: "#a3c8d8",
                    },
                    lineStyle: {
                        normal: {
                            width: 2,

                            //线条颜色
                            color: colors[index][0],
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
                                        color: colors[index][1],
                                    },
                                    {
                                        offset: 0.9,
                                        color: colors[index][2],
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
            ],
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

.echarts {
    width: 90%;
    height: 100%;
}

.echTitle {
    position: absolute;
    top: 0;
    left: 10px;
    color: #a6bde9;
    font-size: 12px;
}
</style>