<template>
    <div class='nBox'>
        <div class="lineAndcircle">
            <span style="color: #eee;">CEMS</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <div class="echGird">
            <div style="flex: 1; display: flex; min-height: 0; width: 98%;">
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData1' :indexSign=0></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData2' :indexSign=1></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData3' :indexSign=2></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData4' :indexSign=3></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData5' :indexSign=4></midUnderEcharts>
                </div>
            </div>
            <div style="flex: 1; display: flex; min-height: 0; width: 98%;">
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData6' :indexSign=5></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData7' :indexSign=6></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData8' :indexSign=7></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData9' :indexSign=8></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echDatax='echartX' :echDatay='echData10' :indexSign=9></midUnderEcharts>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import midUnderEcharts from '@/components/mainMid/midUnderEcharts.vue'
import { getCemsData } from '@/api/environment/api'


const initData = () => {
    let payLoad = reactive({
        intervalTime: "hourR",
        currPage: "1",
        pageSize: "24",
    });
    getCemsData(payLoad).then((res) => {
        let resArr = res.data.data.data
        // console.log(resArr);

        for (let i = resArr.length - 1; i >= 0; i--) {
            let newArr = resArr[i][1].Value
            for (let index = 0; index < newArr.length; index++) {
                if (newArr[index][0].Value == "二氧化硫Zs平均值") {
                    echData10.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "氧气含量平均值") {
                    echData9.value.push(newArr[index][1].Value)
                    // console.log(newArr[index][1].Value);
                }
                if (newArr[index][0].Value == "烟尘Zs平均值") {
                    echData2.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "烟气温度平均值") {
                    echData5.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "烟气压力平均值") {
                    echData6.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "烟气流速平均值") {
                    echData3.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "废气平均值") {
                    echData1.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "烟气湿度平均值") {
                    echData4.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "氮氧化物Zs平均值") {
                    echData8.value.push(newArr[index][1].Value)
                }
                if (newArr[index][0].Value == "一氧化氮Zs平均值") {
                    echData7.value.push(newArr[index][1].Value)
                }
            }
            echartX.value.push(resArr[i][6].Value.slice(5))
            // console.log(resArr[i][6].Value.slice(5));
        }
    })
}
let echartX: any = ref([])
let echData1: any = ref([])
let echData2: any = ref([])
let echData3: any = ref([])
let echData4: any = ref([])
let echData5: any = ref([])
let echData6: any = ref([])
let echData7: any = ref([])
let echData8: any = ref([])
let echData9: any = ref([])
let echData10: any = ref([])
onMounted(() => {
    initData()
})
onUnmounted(() => {
})
</script>
<style lang="less" scoped>
@import '../lineAndCircle.css';

.nBox {
    width: 100%;
    height: 100%;
    // background-color: black;
}

.echGird {
    width: 100%;
    height: 80%;
    margin-top: 3%;
    margin-left: 2%;
    // background-color: red;
    display: flex;
    flex-direction: column;
}

.item {
    // background-color: aqua;
    flex: 1;
    min-width: 0;
}
</style>