<template>
    <div id="container">
    </div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';

let map: any = null;
let loca: any = null;
const initMap = async () => {
    AMapLoader.load({
        key: "0ea7e0b5d7a1c4657b75d1ee64e54b66",
        version: "2.0",       // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [],
        Loca: {                // 是否加载 Loca， 缺省不加载
            version: '2.0.0'  // Loca 版本，缺省 1.3.2
        },
    }).then((AMap) => {
        map = new AMap.Map('container', {
            zoom: 11.14,
            viewMode: '3D',
            pitch: 45,
            mapStyle: 'normal',
            center: [120.109233, 30.246411],
            // showBuildingBlock: false,
            // showLabel: false,
        });
        loca = new window.Loca.Container({
            map,
        });
        // loca.ambLight = {
        //     intensity: 0.3,
        //     color: '#fff',
        // };
        // loca.dirLight = {
        //     intensity: 0.6,
        //     color: '#fff',
        //     target: [0, 0, 0],
        //     position: [0, -1, 1],
        // };
        // loca.pointLight = {
        //     color: 'rgb(100,100,100)',
        //     position: [120.24289, 30.341335, 20000],
        //     intensity: 3,
        //     // 距离表示从光源到光照强度为 0 的位置，0 就是光不会消失。
        //     distance: 50000,
        // };
        var geo = new window.Loca.GeoJSONSource({
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_gn.json',
        });
        var colors = ['#FFF8B4', '#D3F299', '#9FE084', '#5ACA70', '#00AF53', '#00873A', '#006B31', '#004835', '#003829'].reverse();
        var height = [1000, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000];
        var pl = new window.Loca.PolygonLayer({
            zIndex: 120,
            opacity: 0.8,
            shininess: 10,
            hasSide: true,
        });

        pl.setSource(geo);
        pl.setStyle({
            topColor: 'green',
            sideTopColor: 'red',
            sideBottomColor: 'black',
            height: function (index, feature) {
                var v = feature.properties.health * 100;
                return v < 40 ? height[8] :
                    v < 50 ? height[7] :
                        v < 55 ? height[6] :
                            v < 60 ? height[5] :
                                v < 65 ? height[4] :
                                    v < 70 ? height[3] :
                                        v < 75 ? height[2] :
                                            v < 80 ? height[1] :
                                                v < 100 ? height[0] : 0;
            },
            altitude: 0,
        });
        loca.add(pl);

        // 图例
        var lengend = new window.Loca.Legend({
            loca: loca,
            title: {
                label: '健康度',
                fontColor: '#eee',
            },
            style: {
                backgroundColor: 'rgba(255,255,255,0.1)',
                left: '20px',
                bottom: '40px',
            },
            dataMap: [
                { label: 100, color: colors[0] },
                { label: 80, color: colors[1] },
                { label: 75, color: colors[2] },
                { label: 70, color: colors[3] },
                { label: 65, color: colors[4] },
                { label: 60, color: colors[5] },
                { label: 55, color: colors[6] },
                { label: 50, color: colors[7] },
                { label: 40, color: colors[8] },
            ].reverse(),
        });


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
        // 拾取
        map.on('mousemove', (e: any) => {
            var feat = pl.queryFeature(e.pixel.toArray());
            if (feat) {
                text.show();
                var health = feat.properties.health;
                text.setText(feat.properties.name + ' 健康度：' + parseInt(health * 100) + ' %');
                text.setPosition(e.lnglat);
                pl.setStyle({
                    topColor: 'pink',
                    sideTopColor: 'blue',
                    sideBottomColor: (index, feature) => {
                        if (feature === feat) {
                            return [164, 241, 199, 0.5];
                        }
                        var v = feature.properties.health * 100;
                        return v < 40 ? colors[8] :
                            v < 50 ? colors[7] :
                                v < 55 ? colors[6] :
                                    v < 60 ? colors[5] :
                                        v < 65 ? colors[4] :
                                            v < 70 ? colors[3] :
                                                v < 75 ? colors[2] :
                                                    v < 80 ? colors[1] :
                                                        v < 100 ? colors[0] : 'green';
                    },
                    height: function (index, feature) {
                        var v = feature.properties.health * 100;
                        return v < 40 ? height[8] :
                            v < 50 ? height[7] :
                                v < 55 ? height[6] :
                                    v < 60 ? height[5] :
                                        v < 65 ? height[4] :
                                            v < 70 ? height[3] :
                                                v < 75 ? height[2] :
                                                    v < 80 ? height[1] :
                                                        v < 100 ? height[0] : 0;
                    },
                });
            } else {
                text.hide();
            }
        });

        var dat = new window.Loca.Dat();
        dat.addLight(loca.ambLight, loca, '环境光');
        dat.addLight(loca.dirLight, loca, '平行光');
        dat.addLight(loca.pointLight, loca, '点光');
        dat.addLayer(pl);

        // 生长动画
        map.on('click', function () {
            pl.addAnimate({
                key: 'height',
                value: [0, 1],
                duration: 1000,
                easing: 'CubicInOut',
            }, function () {
                // console.log(123);
            });
        });
    }).catch(e => {
        console.log(e);
    })
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
}
</style>