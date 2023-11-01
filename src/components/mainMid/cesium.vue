<template>
    <div id="cesiumContainer">
    </div>
</template>

<script setup lang="ts">
import * as Cesium from "cesium";

const initCesium = async () => {
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZDAwZDdkNi02ZThkLTQ1YjMtOTI3YS05YjcxYzZkNTkwMTAiLCJpZCI6MTc0MzU3LCJpYXQiOjE2OTg0MDA5MTZ9.gL0jzqR0rWFKvJlx_z43XlBApekcDluQNwgTahfKDbI"

    // const viewer = new Cesium.Viewer("cesiumContainer")
    // viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

    // viewer.terrainProvider = Cesium.createWorldTerrainAsync({
    //     requestWaterMask: true, // required for water effects
    //     requestVertexNormals: true // required for terrain lighting
    // });
    // try {
    //     const imageryLayer = viewer.imageryLayers.addImageryProvider(
    //         await Cesium.IonImageryProvider.fromAssetId(3954)
    //     );
    //     await viewer.zoomTo(imageryLayer);
    // } catch (error) {
    //     console.log(error);
    // }

    // viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3954 }));

    // viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3954 }));

    const viewer = new Cesium.Viewer("cesiumContainer", {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
        scene3DOnly: true,
        infoBox: false,
        // baseLayerPicker:false, //隐藏图块图标
        // terrainProvider:Cesium.createWorldTerrainAsync({
        //     requestWaterMask:true,
        //     requestVertexNormals:false
        // })
    })
    viewer._cesiumWidget._creditContainer.style.display = "none"; //去掉版权信息

    viewer.scene.sun.show = false; //在Cesium1.6(不确定)之后的版本会显示太阳和月亮，不关闭会影响展示
    viewer.scene.moon.show = false;
    viewer.scene.skyBox.show = false; //关闭天空盒，否则会显示天空颜色
    viewer.scene.globe.show = false;
    viewer.scene.globe.enableLighting = false; // 开启全球光照
    viewer.shadows = true;

    //是否开启抗锯齿
    viewer.scene.fxaa = true;
    viewer.scene.postProcessStages.fxaa.enabled = true;
    // viewer.camera.setView({
    //     destination:Cesium.Cartesian3.fromDegrees(113.318977,23.114155,200)
    // })
    
    //信息窗体
    var handler = new Cesium.ScreenSpaceEventHandler(
        viewer.scene.canvas
    );
}
onMounted(() => {
    initCesium()
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
}
</style>