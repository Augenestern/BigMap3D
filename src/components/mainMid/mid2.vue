<template>
    <div class='nBox'>
        <div class="lineAndcircle">
            <span style="color: #eee;">CEMS</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <div class="echGird">
            <div style="flex: 1; display: flex; min-height: 0; width: 98%;">
                <div class="item">
                    <midUnderEcharts :echData = 'echData2' :indexSign = 0></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData2' :indexSign = 1></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData2' :indexSign = 2></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 3></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 4></midUnderEcharts>
                </div>
            </div>
            <div style="flex: 1; display: flex; min-height: 0; width: 98%;">
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 5></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 6></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 7></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 8></midUnderEcharts>
                </div>
                <div class="item">
                    <midUnderEcharts :echData = 'echData1' :indexSign = 9></midUnderEcharts>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import midUnderEcharts from '@/components/mainMid/midUnderEcharts.vue'

let echData1 = ref([
    {
        value: 335,
        name: 'A',
    },
    {
        value: 234,
        name: 'B'
    },
    {
        value: 1548,
        name: 'C'
    },
    {
        value: 1048,
        name: 'D'
    }
])
let echData2 = ref([
    {
        value: 35,
        name: 'A',
    },
    {
        value: 284,
        name: 'B'
    },
    {
        value: 28,
        name: 'C'
    },
    {
        value: 198,
        name: 'D'
    }
])
onMounted(() => {
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