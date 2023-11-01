<template>
  <div class="mBox">
    <div class="header">
      <div class="header-left">
        <div class="lineAndcircle">
          <span>&nbsp&nbsp平台上线<span style="color: #2CF7FE; font-size: 22px;">&nbsp{{ countTimeDay }}&nbsp</span>天</span>
          <span class="lineAndcircle-circle"></span>
        </div>
      </div>
      <div class="header-mid">
        <Decoration11 style="width: 40vw;height: 6vh; color: #eee;font-weight: 600;font-size: 22px;">义东炭素环保管控平台&nbsp
          <el-icon style="color: #ccc; font-size: 18px;" @click="fullScreen">
            <FullScreen />
          </el-icon>
        </Decoration11>
      </div>
      <div class="header-right">
        <div class="lineAndcircle" style="position: absolute;right: 0;bottom: 0;">
          <span style="float: right;color: #2CF7FE;">{{ nowTime }}&nbsp&nbsp&nbsp&nbsp</span>
          <span class="lineAndcircle-circle" style="left: -3px;"></span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
        <BorderBox13 class="main-box left1">
          <left1></left1>
        </BorderBox13>
        <BorderBox12 class="main-box left2">
          <left2></Left2>
        </BorderBox12>
        <BorderBox12 class="main-box left3">
          <left3></Left3>
        </BorderBox12>
        <BorderBox12 class="main-box left4">
          <left4></Left4>
        </BorderBox12>
      </div>
      <div class="main-mid">
        <BorderBox12 class="main-map mid1">
          <mid1></mid1>
          <!-- <threejs></threejs> -->
        </BorderBox12>
        <BorderBox12 class="main-box mid2">
          <mid2></mid2>
        </BorderBox12>
      </div>
      <div class="main-right">
        <BorderBox13 class="main-box right1">
          <right1></right1>
        </BorderBox13>
        <BorderBox12 class="main-box right2">
          <right2></right2>
        </BorderBox12>
        <BorderBox12 class="main-box right3">
          <right3></right3>
        </BorderBox12>
        <BorderBox12 class="main-box right4">
          <right4></right4>
        </BorderBox12>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import left1 from '@/components/mainLeft/left1.vue'
import left2 from '@/components/mainLeft/left2.vue'
import left3 from '@/components/mainLeft/left3.vue'
import left4 from '@/components/mainLeft/left4.vue'
// import mid1 from '@/components/mainMid/mid1.vue'
// import cesium from '@/components/mainMid/cesium.vue'
// import threejs from '@/components/mainMid/threejs.vue'
import mid2 from '@/components/mainMid/mid2.vue'
import right1 from '@/components/mainRight/right1.vue'
import right2 from '@/components/mainRight/right2.vue'
import right3 from '@/components/mainRight/right3.vue'
import right4 from '@/components/mainRight/right4.vue'
import { Decoration11, BorderBox13, BorderBox12 } from '@kjgl77/datav-vue3'
import dayjs from 'dayjs'
let nowTime = ref("0000-00-00 00:00:00")
setInterval(() => {
  nowTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}, 1000)

// 全屏
const fullScreen = () => {
  var docElm: any = document.documentElement;
  // W3C
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  }
  // FireFox
  else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  }
  // Chrome等
  else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
  // IE11
  else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
  // 退出全屏
  // W3C
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  // FireFox
  else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  }
  // Chrome等
  else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
    data.name = "全屏";
  }
  // IE11
  else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

let countTimeDay: any=ref()
const timeCount = () => {
  let futruetime = new Date("2023/10/31").getTime();
  let nowtime = new Date().getTime();
  let msec = nowtime - futruetime;
  let time: any = msec / 1000; // 毫秒/1000
  countTimeDay.value = parseInt(time / 86400); // 天  24*60*60*1000
}
onMounted(() => {
  timeCount()
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.mBox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #111339;
}

.header {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.header-left {
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  min-width: 0;
}

.header-mid {
  flex: 2.5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
}

.header-right {
  position: relative;
  flex: 1;
  min-width: 0;
}

.main {
  flex: 14;
  display: flex;
  flex-direction: row;
}

.main-left {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.left1 {
  flex: 1;
  position: relative;
  min-height: 0;
}

.left2 {
  flex: 1;
  min-height: 0;
}

.left3 {
  flex: 1;
  min-height: 0;
}

.left4 {
  flex: 2;
  min-height: 0;
}

.main-mid {
  display: flex;
  flex-direction: column;
  flex: 2.5;
  min-width: 0;
}

.mid1 {
  // padding: 1%;
  // box-sizing: border-box;
  flex: 3;
  // border: 1px red solid;
  min-height: 0;
}

.mid2 {
  flex: 2;
  min-height: 0;
}

.main-right {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.right1 {
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
}

.right2 {
  flex: 1;
  min-height: 0;
}

.right3 {
  flex: 1;
  min-height: 0;
}

.right4 {
  flex: 2;
  min-height: 0;
}

.main-box {
  width: 100%;
  height: 100%;
}

.lineAndcircle {
  width: 20vw;
  height: 3.5vh;
  border-bottom: 1px #6e81ef solid;
  color: #eee;
  margin: 5px;
  position: relative;

  &-circle {
    position: absolute;
    right: -3px;
    bottom: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #2CF7FE;
  }
}
</style>