<template>
    <div class='nBox'>
        <div class="lineAndcircle">
            <span style="color: #eee;">环境数据实时播报</span>
            <span class="lineAndcircle-circle"></span>
        </div>
        <ScrollBoard ref="scrollBoard" :config="config" style="width:94%;height:87%;margin-top: 2%;margin-left: 3%; " />
    </div>
</template>

<script setup lang="ts">
import { ScrollBoard } from '@kjgl77/datav-vue3'
const config = reactive({
    header: ['设备名称', '指标/参数', '实时数据', '小时值'],
    data: [
        ['行1列1', '行1列2', '行1列3','行1列4'],
        ['行2列1', '行2列2', '行2列3','行2列4'],
        ['行3列1', '行3列2', '行3列3','行3列4'],
        ['行4列1', '行4列2', '行4列3','行4列4'],
        ['行5列1', '行5列2', '行5列3','行5列4'],
        ['行6列1', '行6列2', '行6列3','行6列4'],
        ['行7列1', '行7列2', '行7列3','行7列4'],
        ['行8列1', '行8列2', '行8列3','行8列4'],
        ['行9列1', '行9列2', '行9列3','行9列4'],
        ['行10列1', '行10列2', '行10列3','行10列4'],
    ],
    headerBGC: '#05365F',
    oddRowBGC: "rgba(0,0,0,0)",
    evenRowBGC: "rgba(0,0,0,0)",
    rowNum: 7,
    waitTime: 1000,
    index: false,
    align: ['center', 'center', 'center'],
})
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
    // background-color: aqua;
}
</style>