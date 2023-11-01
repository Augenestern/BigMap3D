<template>
    <div class='nBox'>
        <div class="lineAndcircle">
            <span style="color: #eee;">环境数据实时播报</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <ScrollBoard ref="scrollBoard" :config="config" style="width:94%;height:87%;margin-top: 2%;margin-left: 3%;" />
    </div>
</template>

<script setup lang="ts">
import { getCemsData } from '@/api/environment/api'
import { ScrollBoard } from '@kjgl77/datav-vue3'
const config = reactive({
    header: ['设备名称', '指标/参数', '实时数据', '小时值'],
    data: [
        ['CEMS', '废气', '0.0000', '0.0000'],
        ['CEMS', '烟尘', '00.0000', '0.0000'],
        ['CEMS', '烟气流速', '0.0000', '0.0000'],
        ['CEMS', '烟气湿度', '0.0000', '0.0000'],
        ['CEMS', '烟气温度', '0.0000', '0.0000'],
        ['CEMS', '烟气压力', '0.0000', '0.0000'],
        ['CEMS', '一氧化氮', '0.0000', '0.0000'],
        ['CEMS', '氮氧化物', '0.0000', '0.0000'],
        ['CEMS', '氧含量', '0.0000', '0.0000'],
        ['CEMS', '二氧化硫', '0.0000', '0.0000'],
    ],
    headerBGC: '#05365F',
    oddRowBGC: "rgba(0,0,0,0)",
    evenRowBGC: "rgba(0,0,0,0)",
    rowNum: 7,
    waitTime: 1000,
    index: false,
    align: ['center', 'center', 'center'],
})

const getData = () => {
    let payLoadH = reactive({
        intervalTime: "hourR",
        currPage: "1",
        pageSize: "1",
    });
    let payLoadM = reactive({
        intervalTime: "minR",
        currPage: "1",
        pageSize: "1",
    });
    getCemsData(payLoadH).then((res) => {
        let newArr = res.data.data.data[0][1].Value
        // console.log(newArr, '小时');
        for (let index = 0; index < newArr.length; index++) {
            if (newArr[index][0].Value == "二氧化硫Zs平均值") {
                config.data[9][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "氧气含量平均值") {
                config.data[8][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟尘Zs平均值") {
                config.data[1][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气温度平均值") {
                config.data[4][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气压力平均值") {
                config.data[5][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气流速平均值") {
                config.data[2][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "废气平均值") {
                config.data[0][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气湿度平均值") {
                config.data[3][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "氮氧化物Zs平均值") {
                config.data[7][3] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "一氧化氮Zs平均值") {
                config.data[6][3] = Number(newArr[index][1].Value).toFixed(4)
            }
        }
    })
    getCemsData(payLoadM).then((res) => {
        let newArr = res.data.data.data[0][1].Value
        // console.log(newArr, '分钟');
        for (let index = 0; index < newArr.length; index++) {
            if (newArr[index][0].Value == "二氧化硫Zs平均值") {
                config.data[9][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "氧气含量平均值") {
                config.data[8][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟尘Zs平均值") {
                config.data[1][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气温度平均值") {
                config.data[4][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气压力平均值") {
                config.data[5][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气流速平均值") {
                config.data[2][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "废气平均值") {
                config.data[0][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "烟气湿度平均值") {
                config.data[3][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "氮氧化物Zs平均值") {
                config.data[7][2] = Number(newArr[index][1].Value).toFixed(4)
            }
            if (newArr[index][0].Value == "一氧化氮Zs平均值") {
                config.data[6][2] = Number(newArr[index][1].Value).toFixed(4)
            }
        }
    })
}
onMounted(() => {
    getData()
    setInterval(() => {
        getData()
    }, 1000 * 60);
})
onUnmounted(() => {
})
</script>
<style lang="less" scoped>
@import '../lineAndCircle.css';

.nBox {
    width: 100%;
    height: 100%;
    // background-color: aqua;
}

/deep/.header-item {
    font-size: 12px;
}

/deep/.row-item {
    font-size: 12px !important;
}
</style>