<template>
    <div id="myContainer">
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const initSence = () => {
    //创建场景
    const scene = new THREE.Scene()
    //创建相机
    const camera = new THREE.PerspectiveCamera(
        45, //视角
        window.innerWidth / window.innerHeight,  //宽高比
        0.1, //近平面
        1000 //远平面
    )
    //创建渲染器
    const renderer = new THREE.WebGLRenderer();

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMapSoftness = 1.5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)
    // container.appendChild(renderer.domElement);
    //设置相机位置
    camera.position.z = 150;
    camera.position.y = 50;
    camera.position.x = 50;
    camera.lookAt(0, 0, 0);

    // 添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);  //5是线段长度
    scene.add(axesHelper)

    //添加轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true;  //设置带阻尼的惯性
    controls.dampingFactor = 0.03;  //设置阻尼系数
    controls.autoRotate = true //自动旋转
    controls.autoRotateSpeed = 1; //速度
    controls.autoRotateSpeed = 1;  // 逆时针旋转
    // scene.add(controls)

    //引入gltf文件
    var loader = new GLTFLoader();
    let model: any
    // const worldPosition = new THREE.Vector3();
    loader.load('/public/2/scene.gltf', function (gltf: any) {
        model = gltf.scene;
        model.position.set(-40, -90, 20)
        model.traverse((child: any) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        scene.add(model);
    }, undefined, function (error: any) {
        console.error(error);
    });

    //渲染函数
    function animate() {
        controls.update()
        requestAnimationFrame(animate);
        // labelRenderer3D.render(scene, camera); //渲染HTML标签对象 CSS3DObject 标签
        //旋转
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        //渲染
        renderer.render(scene, camera)
    }
    animate()

    //创建地板
    function createGround() {
        //创建函数器
        const geometry = new THREE.BoxGeometry(8, 8, 0.1);
        //创建材质
        // side: THREE.DoubleSide
        const groundMaterial = new THREE.MeshStandardMaterial({ color: '#939393' })
        //渲染网络
        const cube = new THREE.Mesh(geometry, groundMaterial)

        //设置偏移
        // cube.position.x = 2
        cube.position.set(0, -0.05, 0)

        // // 让地面接收阴影
        cube.receiveShadow = true;
        cube.visible = true
        //放大
        // cube.scale.set(2,2,2)
        //旋转
        cube.rotation.x = Math.PI / 2;  //45度 Math.PI是180度
        //将网格素材加到场景中
        cube.name = '地板'
        scene.add(cube)
    }
    createGround()

    let cubecs: any
    function createM1() {
        //创建函数器
        const geometrycs = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        //创建材质
        // side: THREE.DoubleSide
        const groundMaterialcs = new THREE.MeshStandardMaterial({ color: 'yellow' })
        //渲染网络
        cubecs = new THREE.Mesh(geometrycs, groundMaterialcs)

        //设置偏移
        // cube.position.x = 2
        cubecs.position.set(1, 0.1, 1)

        // // 让地面接收阴影
        cubecs.castShadow = true;
        cubecs.visible = true
        //放大
        // cube.scale.set(2,2,2)
        //旋转
        // cubecs.rotation.x = Math.PI / 2;  //45度 Math.PI是180度
        //将网格素材加到场景中
        cubecs.name = '方块'
        scene.add(cubecs)
    }
    createM1()

    function createLight() {
        // 创建环境光
        const ambientLight = new THREE.AmbientLight('#fff', 1)
        scene.add(ambientLight)

        // 创建平行光
        const directionalLight = new THREE.DirectionalLight('#1E90FF', 1)
        directionalLight.position.set(-1.44, 2.2, 1)
        // directionalLight.castShadow = true
        // directionalLight.shadow.mapSize.width = 1920;
        // directionalLight.shadow.mapSize.height = 1080;
        // directionalLight.shadow.camera.near = 1;
        // directionalLight.shadow.camera.far = 10;
        directionalLight.visible = true
        // directionalLight.target.position.set(0,0.5,0) 
        scene.add(directionalLight)

        // 创建平行光辅助线
        const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, .5)
        directionalLightHelper.visible = false
        scene.add(directionalLightHelper)

        // 创建点光源
        const pointLight = new THREE.PointLight(0xff0000, 1, 100)  // 第一个参数是光的颜色，第二个参数是光的强度，第三个参数是光的距离
        pointLight.visible = true
        scene.add(pointLight)

        // 创建点光源辅助线
        // const pointLightHelper = new THREE.PointLightHelper(pointLight, .5)
        // pointLightHelper.visible = true
        // scene.add(pointLightHelper)

        //  创建聚光灯
        const spotLight = new THREE.SpotLight('#323636', 10000, 30);
        spotLight.visible = true
        spotLight.angle = Math.PI / 10  //光锥开合角度
        spotLight.map = null
        // spotLight.map = new THREE.TextureLoader().load(require('@/assets/image/model-bg-1.jpg'));
        spotLight.decay = 2;
        spotLight.castShadow = true;
        spotLight.position.set(-2, 5, 1.4)
        spotLight.shadow.mapSize.width = 1920;
        spotLight.shadow.mapSize.height = 1080;
        spotLight.shadow.camera.near = 1;
        spotLight.shadow.camera.far = 10;
        spotLight.penumbra = 0.5;
        scene.add(spotLight);
        //创建聚光灯辅助线
        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        spotLightHelper.visible = false
        scene.add(spotLightHelper)

    }
    createLight()


    //监听窗口变化,使画布自适应窗口大小
    window.addEventListener('resize', () => {
        //重置渲染器宽高比
        renderer.setSize(window.innerWidth, window.innerHeight)
        //重置相机宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        //更新相机投影矩阵
        camera.updateProjectionMatrix();
    })

}


onMounted(() => {
    initSence()
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped></style>