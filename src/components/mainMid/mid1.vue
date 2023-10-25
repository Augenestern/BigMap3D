<template>
    <div style="width: 98.8%;height: 98%; position: relative;left: 0.6%;top: 1%;">
        <div id="container" style="border-radius: 10px;">
        </div>
        <el-dialog :title=houseNameSign v-model="dialogVisible" width="50%">2222</el-dialog>
        <div style="position: absolute;bottom:5px; right:10px; color: #6395f9;" @click="chongzhiMap">
            <svg style="width: 26px" t="1698059703915" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4493" width="32" height="32">
                <path
                    d="M713.536 255.232l-58.624 72.192L960 355.712 868.8 64l-72.512 89.344A458.88 458.88 0 0 0 523.52 64C269.76 64 64 269.184 64 522.24c0 253.12 205.76 458.24 459.52 458.24a459.648 459.648 0 0 0 429.44-294.72 65.408 65.408 0 0 0-37.824-84.48 65.728 65.728 0 0 0-84.8 37.76A328.32 328.32 0 0 1 523.584 849.6c-181.312 0-328.32-146.56-328.32-327.36 0-180.736 147.008-327.296 328.32-327.296 69.376 0 135.232 21.504 189.952 60.288"
                    fill="#6395f9" p-id="4494"></path>
            </svg>
        </div>
        <div style="position: absolute;top:10px; right:10px; color: #6395f9;" @click="changeMap">
            <svg style="width: 26px" t="1698059826147" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="8231" width="32" height="32">
                <path
                    d="M629.557 391.972c17.329 17.32 47.028 17.32 66.815 0l168.302-165.814v133.637c0 19.806 14.85 34.647 34.637 34.647h24.743c19.806 0 34.657-12.372 34.657-29.692V119.733h-2.479l2.479-17.318c0-9.904-2.479-17.33-7.436-24.752-4.936-4.948-14.848-9.895-24.743-9.895h-17.327L664.211 65.29c-19.805 0-34.654 17.329-34.654 34.646v24.752c2.478 22.274 19.789 34.646 39.593 34.646h128.69L632.036 325.149c-22.283 17.319-22.283 47.026-2.478 66.823zM394.44 629.557c-17.31-17.327-47.009-17.327-66.815 0l-168.3 165.807V664.195c0-19.787-14.833-34.638-34.638-34.638h-24.76c-19.788 0-34.639 12.372-34.639 29.699v242.533h2.478l-2.478 17.327c0 9.894 2.478 17.31 7.416 24.744 4.956 4.956 14.868 9.894 24.761 9.894h17.328l244.993 2.478c19.823 0 34.655-17.328 34.655-34.638v-24.76c-2.478-22.266-19.788-34.638-39.593-34.638H226.16l168.283-165.824c17.327-17.327 17.327-47.027-0.001-66.815z m561.79 274.709v-242.55c0-19.787-17.329-29.68-34.639-29.68h-24.759c-19.788 0-34.639 17.31-34.639 34.638v131.168l-168.3-165.806c-17.309-17.329-47.01-17.329-66.816 0-17.326 17.31-17.326 47.009 0 66.814l168.284 165.806h-128.69c-19.787 0-37.116 12.388-39.594 34.654v24.745c0 19.805 17.33 34.654 34.64 34.654l240.071-2.478h17.329c9.893 0 17.31-2.478 24.743-9.894 4.955-4.956 7.415-14.85 7.415-24.744l4.955-17.327c-2.478 0 0 0 0 0zM228.636 159.335h128.69c19.806 0 37.116-12.373 39.593-34.646V99.936c0-19.797-17.309-34.646-34.654-34.646l-244.993 2.478H99.927c-9.876 0-17.31 2.478-24.743 9.895-4.939 4.956-7.416 14.849-7.416 24.752l2.477 17.318h-2.477v245.018c0 19.797 14.85 29.692 34.638 29.692h24.743c19.823 0 34.655-14.841 34.655-34.646v-133.64l168.283 165.815c17.345 17.32 47.045 17.32 66.832 0 17.33-17.327 17.33-47.026 0-66.823L228.636 159.335z m0 0"
                    p-id="8232" fill="#6395f9"></path>
            </svg>
        </div>
        <div style="position: absolute;bottom:4px; right:40px; color: #6395f9;" @click="stopOrStart">
            <svg v-if="requestIdSign" style="width: 30px" t="1698146854825" class="icon" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5185" width="32" height="32">
                <path
                    d="M512 936a424.1 424.1 0 0 1-165.05-814.66 424.1 424.1 0 0 1 330.1 781.33A421.38 421.38 0 0 1 512 936z m0-768c-189.68 0-344 154.32-344 344s154.32 344 344 344 344-154.32 344-344-154.32-344-344-344z"
                    fill="#6395f9" p-id="5186"></path>
                <path
                    d="M349.75 349.75m57.15 0l210.2 0q57.15 0 57.15 57.15l0 210.2q0 57.15-57.15 57.15l-210.2 0q-57.15 0-57.15-57.15l0-210.2q0-57.15 57.15-57.15Z"
                    fill="#6395f9" p-id="5187"></path>
            </svg>
            <svg v-if="!requestIdSign" style="width: 30px" t="1698147148779" class="icon" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6325" width="32" height="32">
                <path
                    d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m265.87 713.87a374.62 374.62 0 1 1 80.61-119.54 374.59 374.59 0 0 1-80.61 119.54z"
                    p-id="6326" fill="#6395f9"></path>
                <path
                    d="M696.93 500l-255-217a18.82 18.82 0 0 0-12.53-4.73c-9.47 0-18.41 6.58-18.41 16.66V729c0 10 8.94 16.66 18.41 16.66a18.43 18.43 0 0 0 12.48-4.66l255-217a15.62 15.62 0 0 0 0.05-24z"
                    p-id="6327" fill="#6395f9"></path>
            </svg>
        </div>
        <div style="position: absolute;bottom:4px; right:76px; color: #6395f9;" @click="hideMarker">
            <svg v-if="houseNameShow" style="width: 30px" t="1698148211423" class="icon" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9306" width="32" height="32">
                <path
                    d="M91.306667 512a796.928 796.928 0 0 1 105.130666-141.482667C272.938667 289.024 379.733333 213.333333 512 213.333333c132.266667 0 239.146667 75.690667 315.52 157.184A797.056 797.056 0 0 1 932.693333 512a797.184 797.184 0 0 1-105.130666 141.482667C751.146667 734.976 644.309333 810.666667 512 810.666667c-132.266667 0-239.104-75.690667-315.52-157.184A797.013333 797.013333 0 0 1 91.306667 512zM981.333333 512l38.144-19.114667-0.085333-0.128-0.128-0.298666-0.469333-0.938667a452.906667 452.906667 0 0 0-8.192-15.104 882.133333 882.133333 0 0 0-120.789334-164.266667C806.186667 222.976 678.357333 128 512 128 345.6 128 217.770667 222.976 134.186667 312.149333a882.090667 882.090667 0 0 0-120.789334 164.266667 528 528 0 0 0-8.192 15.104l-0.469333 0.938667-0.128 0.298666-0.085333 0.085334s0 0.085333 38.144 19.157333l-38.144-19.072a42.666667 42.666667 0 0 0 0 38.144L42.666667 512l-38.144 19.072 0.085333 0.170667 0.128 0.298666 0.469333 0.938667a352.725333 352.725333 0 0 0 8.192 15.104 881.92 881.92 0 0 0 120.789334 164.266667C217.813333 801.024 345.6 896 512 896c166.4 0 294.186667-94.976 377.813333-184.149333a882.005333 882.005333 0 0 0 120.789334-164.266667 503.893333 503.893333 0 0 0 8.192-15.104l0.469333-0.938667 0.128-0.298666 0.085333-0.085334s0-0.085333-38.144-19.157333z m0 0l38.144 19.072c6.016-11.989333 5.973333-26.154667 0-38.186667L981.333333 512z"
                    p-id="9307" fill="#6395f9"></path>
                <path
                    d="M512 426.666667a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z m-170.666667 85.333333a170.666667 170.666667 0 1 1 341.333334 0 170.666667 170.666667 0 0 1-341.333334 0z"
                    p-id="9308" fill="#6395f9"></path>
            </svg>
            <svg v-if="!houseNameShow" style="width: 30px" t="1698148446863" class="icon" viewBox="0 0 1024 1024"
                version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13084" width="32" height="32">
                <path
                    d="M170.263273 747.101091C90.949818 667.554909 46.545455 574.836364 46.545455 519.586909v-13.218909c0-111.616 180.642909-376.087273 465.454545-376.087273 82.990545 0 156.346182 22.109091 219.368727 55.761455l-52.317091 52.317091A390.190545 390.190545 0 0 0 512 200.098909c-240.221091 0-395.636364 227.560727-395.636364 306.269091v13.218909c0 38.493091 37.329455 112.453818 103.330909 178.036364l-49.431272 49.477818zM977.454545 505.809455v13.777454c-0.977455 115.060364-177.803636 376.040727-465.454545 376.040727-98.769455 0-184.552727-32.069818-255.022545-78.382545L106.123636 968.145455a34.816 34.816 0 0 1-49.338181 0 34.909091 34.909091 0 0 1 0-49.384728L917.876364 57.716364a34.909091 34.909091 0 1 1 49.384727 49.384727l-143.080727 143.080727c97.559273 84.014545 152.669091 192.046545 153.274181 255.627637z m-365.195636-43.752728l-151.226182 151.179637c15.36 7.959273 32.488727 12.8 50.920728 12.8 62.370909 0 113.105455-50.734545 113.105454-113.105455a109.195636 109.195636 0 0 0-12.8-50.874182z m295.377455 44.032c-0.465455-48.733091-49.431273-137.122909-132.933819-206.475636l-111.616 111.662545c19.828364 29.090909 31.883636 63.860364 31.883637 101.655273a183.109818 183.109818 0 0 1-182.923637 182.923636c-37.841455 0-72.610909-12.055273-101.701818-31.930181l-102.493091 102.493091c57.576727 35.141818 126.231273 59.345455 204.194909 59.345454 236.404364 0 394.845091-218.158545 395.636364-306.501818v-13.172364zM512 399.872c1.722182 0 3.304727 0.418909 5.026909 0.512l58.321455-58.321455A180.270545 180.270545 0 0 0 512 330.053818a183.109818 183.109818 0 0 0-182.923636 182.923637c0 22.341818 4.608 43.566545 11.962181 63.348363l58.321455-58.321454c0-1.722182-0.465455-3.304727-0.465455-5.026909 0-62.370909 50.734545-113.105455 113.105455-113.105455z"
                    fill="#6395f9" p-id="13085"></path>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import img from "../../assets/图片9.png";
import ydtsJson from '../../assets/ydtsJson.json'

const router = new (useRouter as any)
let houseNameSign: any = ref("");
let map: any = null;
let loca: any = null;
const dialogVisible = ref(false)
let houseNameShow = ref(true)
let markers: any = []
const initMap = async () => {
    AMapLoader.load({
        key: "0ea7e0b5d7a1c4657b75d1ee64e54b66",
        version: "2.0",       // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [],
        Loca: {                // 是否加载 Loca， 缺省不加载
            version: '2.0.0'  // Loca 版本，缺省 1.3.2
        },
    }).then((AMap) => {
        //图片图层
        var imageLayer = new AMap.ImageLayer({
            url: img,
            // opacity:0.5,
            bounds: new AMap.Bounds(
                [114.53534, 36.38135], //左下角
                [114.601, 36.412992], //右上角
            )
        });
        //初始化地图
        map = new AMap.Map('container', {
            // center: [114.565896, 36.394500],//原始
            center: [114.568, 36.394500],
            zoom: 14.5,
            viewMode: '3D',
            pitch: 45,
            rotation: 0,
            showBuildingBlock: false,
            showLabel: false,
            mapStyle: "amap://styles/darkblue",
            layers: [
                AMap.createDefaultLayer(),
                imageLayer,
            ]
        });
        initLoca(AMap)

        //地图自动旋转
        cancelAnimationFrame(requestId);
        animateMap(map.getRotation());
    }).catch(e => {
        console.log(e);
    })
}

//地图自动旋转函数
let requestId: any
let requestIdSign: any = ref(false)
const stopOrStart = () => {
    requestIdSign.value = !requestIdSign.value
    cancelAnimationFrame(requestId);
    animateMap(map.getRotation())
}
const animateMap = (rotation: any) => {
    if (requestIdSign.value) {
        let rotationAngle = rotation;
        const rotationSpeed = 0.1;
        // 更新地图旋转角度的函数
        function updateRotation() {
            rotationAngle += rotationSpeed;
            // if (rotationAngle >= 360) {
            //     rotationAngle = 0;
            // }
            map.setRotation(rotationAngle); // 设置地图旋转角度
        }
        // 每帧更新地图旋转角度
        function animate() {
            updateRotation();
            requestId = requestAnimationFrame(animate);
        }
        // 开始自动旋转
        requestId = requestAnimationFrame(animate);
    }
}


const initLoca = (AMap: any) => {
    loca = new window.Loca.Container({
        map,
    });

    var geo = new window.Loca.GeoJSONSource({
        data: ydtsJson
    })

    // loca.ambLight = {
    //       intensity: 0.3,
    //       color: '#fff',
    //   };
    //   loca.dirLight = {
    //       intensity: 0.6,
    //       color: '#fff',
    //       target: [0, 0, 0],
    //       position: [0, -1, 1],
    //   };
    //   loca.pointLight = {
    //       color: 'rgb(100,100,100)',
    //       position: [120.24289, 30.341335, 20000],
    //       intensity: 3,
    //       distance: 50000,
    //   };

    //设置图层
    var pl = new window.Loca.PolygonLayer({
        zIndex: 120,
        opacity: 1,
        shininess: 10,
        hasSide: true,
    });
    pl.setSource(geo);

    //设置样式
    pl.setStyle({
        topColor: 'rgb(238, 237, 237)',
        sideTopColor: '#7CE7FD',
        sideBottomColor: 'blue',
        height: (_index: any, feature: any) => {
            return feature.properties.height
        },
        altitude: 0,
    });

    let textTime: any
    //移动函数
    function handleMouseMove(e: any) {
        var feat = pl.queryFeature(e.pixel.toArray());
        if (feat) {
            //设置text 鼠标停留0.1s执行
            text.hide();
            if (!houseNameShow.value) {
                clearTimeout(textTime);
                textTime = setTimeout(() => {
                    text.show();
                    text.setText(feat.properties.name);
                    text.setPosition(e.lnglat);
                }, 100);
            }
            // console.log(feat);
            houseNameSign.value = feat.properties.name

            pl.setStyle({
                topColor: (_index: any, feature: any) => {
                    if (feature === feat) {
                        return 'white';
                    } else {
                        return 'rgb(238, 237, 237)'
                    }
                },
                sideTopColor: (_index: any, feature: any) => {
                    if (feature === feat) {
                        return [186, 244, 255];
                    } else {
                        return '#7CE7FD'
                    }
                },
                sideBottomColor: (_index: any, feature: any) => {
                    if (feature === feat) {
                        return [95, 95, 255];
                    } else {
                        return 'blue'
                    }
                },
                height: (_index: any, feature: any) => {
                    return feature.properties.height
                },
                altitude: 0,
            })
            // console.log(feat.properties.name);
        } else {
            text.hide();

            //此处和上边一样
            pl.setStyle({
                topColor: 'rgb(238, 237, 237)',
                sideTopColor: '#7CE7FD',
                sideBottomColor: 'blue',
                height: (_index: any, feature: any) => {
                    return feature.properties.height
                },
                altitude: 0,
            });
        }
    }

    // 创建纯文本标记
    var text = new AMap.Text({
        text: '纯文本标记',
        anchor: 'center', // 设置文本标记锚点
        draggable: true,
        cursor: 'pointer',
        angle: 0,
        visible: false,
        offset: [0, -25],
        style: {
            'padding': '5px 10px',
            'margin-bottom': '1rem',
            'border-radius': '.25rem',
            'background-color': 'rgba(0,0,0,0.5)',
            // 'width': '12rem',
            'border-width': 0,
            'box-shadow': '0 2px 6px 0 rgba(255, 255, 255, .3)',
            'text-align': 'center',
            'font-size': '16px',
            'color': '#fff',
        },
    });
    text.setMap(map);

    //鼠标移动事件
    map.on('mousedown', () => {
        cancelAnimationFrame(requestId);
        map.off('mousemove', handleMouseMove)
        console.log('mapmousedown');
    })
    map.on('mouseup', () => {
        animateMap(map.getRotation());
        map.on('mousemove', handleMouseMove)
        console.log('mapmouseup');
    })
    map.on('mousemove', handleMouseMove)
    loca.add(pl);
    map.on('click', (e: any) => {
        var feat = pl.queryFeature(e.pixel.toArray());
        if (feat) { clickMap() }
    })

    // 设置点标记
    const initMarker = (AMap: any) => {
        console.log(ydtsJson.features.length);
        for (let i = 0; i < ydtsJson.features.length; i++) {
            console.log(ydtsJson.features[i].properties.name);
            console.log(ydtsJson.features[i].properties.thisCenter);
            let lsname = ydtsJson.features[i].properties.name
            let content = "<div style='pointer-events:none;white-space: nowrap;padding:5px 10px;margin-bottom:1rem; border-radius:.25rem; background-color:rgba(0,0,0,0.5);border-width:0;box-shadow:0 2px 6px 0 rgba(255, 255, 255, .3);text-align:center;font-size:16px;color:#fff;'>" + lsname + "</div>"
            markers[i] = new AMap.Marker({
                content: content,  // 自定义点标记覆盖物内容
                position: [ydtsJson.features[i].properties.thisCenter[0], ydtsJson.features[i].properties.thisCenter[1], ydtsJson.features[i].properties.height], // 基点位置
                offset: new AMap.Pixel(-30, -42) // 相对于基点的偏移位置
            });
            markers[i].on('click', () => {
                clickMapMarker(lsname)
            })
            markers[i].on('mousedown', () => {
                cancelAnimationFrame(requestId);
                map.off('mousemove', handleMouseMove)
            })
            markers[i].on('mouseup', () => {
                animateMap(map.getRotation());
                map.on('mousemove', handleMouseMove)
            })
            map.add(markers[i])
        }
    }
    initMarker(AMap)
}

//点击函数
const clickMap = () => {
    dialogVisible.value = true
    console.log(houseNameSign.value)
}
const clickMapMarker = (lsname: any) => {
    houseNameSign.value = lsname
    dialogVisible.value = true
    console.log(houseNameSign.value)
}


//隐藏点标记
const hideMarker = () => {
    houseNameShow.value = !houseNameShow.value
    if (!houseNameShow.value) {
        for (let i = 0; i < markers.length; i++) {
            markers[i].hide()
        }
    } else {
        for (let i = 0; i < markers.length; i++) {
            markers[i].show()
        }
    }
}
//初始化Map
const chongzhiMap = () => {
    map?.destroy();
    initMap()
}

const changeMap = () => {
    router.push('/map')
}
onMounted(async () => {
    await initMap()
})
onUnmounted(() => {
    map?.destroy();
})
</script>

<style lang="less" scoped>
#container {
    width: 100%;
    height: 100%;
    color: rgb(238, 237, 237);
}

// 弹出框样式
/deep/ .el-dialog {
    border-top-left-radius: 5%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 5%;
    border-bottom-left-radius: 0;
    backdrop-filter: blur(8px);
    border: solid 2px rgba(64, 97, 148, 0.6);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 35% !important;
    height: 45% !important;
    background-color: rgba(64, 97, 148, 0.534);
}

// 弹出框内部样式
/deep/ .el-dialog__body {
    padding: 10px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
    height: 100%;
    width: 97%;
}

// 弹出框头部样式
/deep/ .el-dialog__title {
    line-height: 15px;
    font-size: 18px;
    color: #fff;
}
</style>