<template>
    <div style="display: flex; align-items: center;justify-content: center; width: 100vw;height: 100vh;">
        <div class="echart-demo" id="demo"></div>
    </div>
</template>

<script setup lang="ts">
// 引入echart和json数据
import * as echarts from 'echarts';
import 'echarts-gl';
// 地图json数据
import yiDong from '../../assets/ydtsJson.json';
var buildingData = yiDong.features.map((item) => {
    return {
        name: item.properties.name,
        height: item.properties.height
    }
})
var yourFlightLineData = [
    {
        coords: [[114.586142, 36.403493], [114.549363, 36.403018]]
    }
]

// 设置echart数据
const setOption = () => {
    // 获取echart对象
    const dom = document.getElementById("demo");
    if (dom) {
        // 初始化
        const myEchart = echarts.init(dom);
        // 注册地图
        echarts.registerMap("yiDong", yiDong as any);
        const option = {
            // backgroundColor: "black",
            title: {
                text: "义东碳素",
                left: "center",
                textStyle: {
                    color: "black",
                    fontSize: "16",
                    fontWeight: 600,
                },
                top: "3%",
            },
            geo3D: {
                map: "yiDong",
                regionHeight: 5,
                light: {
                    main: {
                        intensity: 1, // 主光源强度
                        shadow: true, // 启用阴影
                        alpha: 30, // 阴影透明度
                        beta: 300, // 光源方向垂直角度
                    },
                    ambient: {
                        intensity: 0.4, // 环境光强度
                    },
                },
                viewControl: {
                    autoRotate: false, // 是否自动旋转
                    distance: 80, // 相机距离地面的距离
                    minDistance: 50, // 相机距离地面的最小距离
                    maxDistance: 200, // 相机距离地面的最大距离
                    alpha: 40, // 相机绕 y 轴旋转的初始角度
                    beta: 0, // 相机绕 x 轴旋转的初始角度
                    // sensitivity: 5,
                    // damping: 0.94,
                },
                groundPlane: {
                    show: true, // 显示地面
                    color: "white", // 地面颜色
                },
                itemStyle: {
                    // 地图样式
                    color: "#85C2E5", // 区域颜色
                    borderColor: "white", // 边框颜色
                    borderWidth: 2,
                },
                label: {
                    // 文字
                    show: true,
                    color: "black",
                    fontSize: 14,
                    height: 20,
                },
                postEffect: {
                    enable: false,
                },
            },
            series: [
                {
                    type: "lines3D", // 新添加的 lines3D 系列
                    coordinateSystem: "geo3D",
                    effect: {
                        show: true,
                        trailWidth: 5,
                        trailOpacity: 0.9,
                        trailLength: 0.3,
                        constantSpeed: 40,
                    },
                    lineStyle: {
                        width: 3,
                        opacity: 0.5,
                    },
                    data: yourFlightLineData, // 替换成您的飞线数据
                },
                // {
                //   tooltip: {
                //     trigger: "item",
                //   },
                //   type: "map3D",
                //   map: "yiDong", // 自定义扩展图表类型
                //   boxHeight: 1,
                //   data: buildingData,
                //   showLegendSymbol: true, // 存在legend时显示
                //   label: {
                //     // 文字
                //     show: true,
                //     color: "black",
                //     fontSize: 14,
                //     height: 20,
                //   },
                //   light: {
                //     main: {
                //       intensity: 1, // 主光源强度
                //       shadow: true, // 启用阴影
                //       alpha: 30, // 阴影透明度
                //       beta: 300, // 光源方向垂直角度
                //     },
                //     ambient: {
                //       intensity: 0.4, // 环境光强度
                //     },
                //   },
                //   viewControl: {
                //     autoRotate: false, // 是否自动旋转
                //     distance: 80, // 相机距离地面的距离
                //     minDistance: 50, // 相机距离地面的最小距离
                //     maxDistance: 200, // 相机距离地面的最大距离
                //     alpha: 40, // 相机绕 y 轴旋转的初始角度
                //     beta: 0, // 相机绕 x 轴旋转的初始角度
                //   },
                //   groundPlane: {
                //     show: true, // 显示地面
                //     color: "white", // 地面颜色
                //   },
                //   itemStyle: {
                //     // 地图样式
                //     color: "#85C2E5", // 区域颜色
                //     borderColor: "white", // 边框颜色
                //     borderWidth: 2,
                //   },
                //   emphasis: {
                //     // 鼠标移入时显示的默认样式
                //     itemStyle: {
                //       areaColor: "#1E3EEE",
                //       borderColor: "#404a59",
                //       borderWidth: 1,
                //     },
                //     label: {
                //       // 文字
                //       show: true,
                //       color: "black",
                //       fontSize: 14,
                //     },
                //   },
                // },
            ],
        };
        myEchart.setOption(option);
        window.addEventListener("resize", function () {
            myEchart.resize();
        });
    }
};

onMounted(() => {
    setOption();
});

</script>

<style scoped lang="less">
.echart-demo {
    width: 800px;
    height: 600px;
    border: 1px solid red;
}
</style>
