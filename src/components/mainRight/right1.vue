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
        <echartCc v-if="activeName == '除尘'"></echartCc>
        <echartTl v-if="activeName == '脱硫'" :tlData="tuoLiuData"></echartTl>
        <echartTx v-if="activeName == '脱硝'" :txData="tuoXiaoData"></echartTx>
    </div>
</template>

<script setup lang="ts">
import { getEleData } from "../../api/environment/api";
import echartCc from './echartsR1/ehartCc.vue'
import echartTl from './echartsR1/echartTl.vue'
import echartTx from './echartsR1/echartTx.vue'

const activeName = ref('除尘')
const getData = () => {
    let params = {
        sensorCode: "c3",
        time: '60',
        tfbool: 'f',
        currPage: "1",
        pageSize: "24",
    }
    getEleData(params).then((res) => {
        let resArr = res.data.data.data
        for (let i = resArr.length - 1; i >= 0; i--) {
            tuoLiuData.xData.push(resArr[i].createTime.slice(5, 16))
            tuoLiuData.y1Data.push(resArr[i].DTUDataDetail[0].value)
        }
    })
}
onMounted(() => {
    getData()
})
onUnmounted(() => {
})
//数据
let tuoLiuData: any = reactive({
    xData: [],
    y1Data: [],
})
let tuoXiaoData: any = reactive({
    xData: ['11-01 12:00', '11-01 13:00', '11-01 14:00', '11-01 15:00', '11-01 16:00', '11-01 17:00', '11-01 18:00', '11-01 19:00', '11-01 20:00', '11-01 21:00', '11-01 22:00', '11-01 23:00', '11-02 00:00', '11-02 01:00', '11-02 02:00', '11-02 03:00', '11-02 04:00', '11-02 05:00', '11-02 06:00', '11-02 07:00', '11-02 08:00', '11-02 09:00', '11-02 10:00', '11-02 11:00'],
    y1Data: [30, 32, 33, 34, 44, 41, 26, 34, 30, 22, 33, 27, 44, 24, 29, 34, 30, 29, 33, 39, 44, 48, 26, 24],
    y2Data: [23, 2, 3, 13, 24, 14, 6, 4, 23, 2, 3, 13, 24, 14, 6, 4, 20, 2, 3, 13, 24, 14, 6, 4],
    y3Data: [20, 20, 13, 13, 14, 14, 6, 4, 3, 20, 13, 13, 14, 14, 6, 4, 3, 20, 13, 13, 14, 14, 6, 4]
})

</script>
<style lang="less" scoped>
@import '../lineAndCircle.css';

.nBox {
    width: 100%;
    height: 100%;
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