<template>
    <div class='nBox'>
        <div class="lineAndcircle">
            <span style="color: #eee;">数据汇总</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <div class="echarts" ref="power">
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { getPieData } from '../../api/environment/api'
const getData = () => {
    let params = {
        time: "30"
    }
    getPieData(params).then((res) => {
        console.log(res);
    })
}
onMounted(() => {
    getData()
    initEcharts()
})
onUnmounted(() => {
})
//数据
let echData = ref([
    {
        value: 335,
        name: 'CEMS',
    },
    {
        value: 234,
        name: '氨逃逸'
    },
    {
        value: 1548,
        name: '治理'
    }
])

//echarts
let myChart: any = null
let first = true
let power: any = ref(null)

//颜色数组
let colorArr = ['rgb(249, 108, 106)', 'rgb(106, 151, 249)', 'rgb(249, 106, 244)', 'rgb(118, 249, 106)', '#1869A0', '#FF9393']
let initEcharts = () => {
    if (first) { myChart = echarts.init(power.value as any); }
    first = false
    let state = reactive({
        option: {
            color: colorArr,
            legend: {
                orient: 'vertical',
                icon: "circle",
                x: '60%',
                y: 'center',
                itemWidth: 8,
                itemHeight: 8,
                // data: ['A', 'B', 'C', 'D'],
                textStyle: {
                    color: "#eee"
                }
            },
            title: {
                text: '圆环图的例子',
                textStyle: {
                    color: "#eee",
                    fontSize: "10px"
                },
                left: '22%',
                top: '42%'
            },
            tooltip: {
                trigger: 'item',
                show: true,
                formatter: (item: any) => {
                    let data = item.data;
                    if (!data.name) {
                        return "";
                    }
                    return `${data.name}: ${data.value}`;
                },
                backgroundColor: "rgba(0,0,0,0.7)", // 背景
                padding: [8, 10],
                extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);",
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    type: 'pie',
                    data: echData.value.map((item: any, index) => {
                        item.label = {
                            color: colorArr[index]
                        }
                        return item
                    }),
                    label: {
                        show: true,
                    },
                    labelLine: {
                        show: true
                    },
                    radius: ['65%', '90%'],
                    center: ["30%", "50%"]
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
    position: absolute;
    margin-top: 3%;
    width: 100%;
    height: 70%;
    // background-color: red;
    color: rgb(118, 249, 106);
}
</style>