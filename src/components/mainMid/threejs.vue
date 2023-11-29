<template>
    <div id="myContainer">
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DSprite, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'

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

    // renderer.domElement.style.position = 'absolute';
    // renderer.domElement.style.top = '0';
    // renderer.domElement.style.left = '0';

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMapSoftness = 1.5;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)
    // container.appendChild(renderer.domElement);
    //设置相机位置
    camera.position.z = 5;
    camera.position.y = 5;
    camera.position.x = 5;
    camera.lookAt(0, 0, 0);

    //添加世界坐标辅助器
    // const axesHelper = new THREE.AxesHelper(5);  //5是线段长度
    // scene.add(axesHelper)

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
    loader.load('/public/1/scene.gltf', function (gltf: any) {
        model = gltf.scene;
        let cssSign = true
        model.traverse((child: any) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.name = '摩托'
                if (cssSign) {
                    cssSign = false
                    // 添加CSS 3DSprite标签
                    let label3DSpritechild = tag3DSprite("摩托");//设置标签名称
                    let pos = new THREE.Vector3();
                    child.getWorldPosition(pos);//获取obj世界坐标、
                    // pos3.y += 1;
                    label3DSpritechild.position.copy(pos);//标签标注在obj世界坐标
                    label3DSpritechild.position.y += 1.2
                    scene.add(label3DSpritechild);//标签插入场景 
                }
            }
        });

        scene.add(model);
        // model = gltf.scene;
        // model.castShadow = true
        // scene.add(model);
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
        labelRenderer(document.body).render(scene, camera);
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

    // 添加CSS 3DSprite标签
    var label3DSprite = tag3DSprite("CSS 3DSprite 标签");//设置标签名称
    var pos3 = new THREE.Vector3();
    cubecs.getWorldPosition(pos3);//获取obj世界坐标、
    // pos3.y += 1;
    label3DSprite.position.copy(pos3);//标签标注在obj世界坐标
    label3DSprite.position.y += 0.15
    scene.add(label3DSprite);//标签插入场景 

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


    // 创建 Raycaster 对象
    const raycaster = new THREE.Raycaster();
    // 监听鼠标单击事件（mousedown 或者 touchstart）
    window.addEventListener('click', onMouseClick, false);
    window.addEventListener('mouseup', () => {
        console.log('up');
    }, false);
    window.addEventListener('mousedown', () => {
        console.log('down');
        window.addEventListener('click', onMouseClick, false);
    }, false);
    window.addEventListener('mousemove', (event:any) => {
        console.log('move');
        window.removeEventListener('click', onMouseClick);

        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            for (let i = 0; i < intersects.length; i++) {
                // console.log(intersects[i].object);
                if (intersects[i].object instanceof THREE.Mesh) {
                    if(intersects[i].object.name=='方块'){
                        intersects[i].object.material.color.set('red')
                    }else{
                        cubecs.material.color.set('yellow')
                    }
                    break
                }
            }
        }
    }, false);
    function onMouseClick(event: any) {
        // 获取当前鼠标位置
        const mouse = new THREE.Vector2();
        // 将浏览器坐标系下的鼠标位置转换为 Three.js 坐标系下的鼠标位置
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        // 根据鼠标位置创建射线
        raycaster.setFromCamera(mouse, camera);
        // 获取所有与射线相交的物体
        const intersects = raycaster.intersectObjects(scene.children);
        // 如果有相交的物体
        if (intersects.length > 0) {
            // 处理点击事件的逻辑
            // intersects[0] 是距离摄像机最近的相交物体
            // console.log(intersects);
            for (let i = 0; i < intersects.length; i++) {
                // console.log(intersects[i].object);
                if (intersects[i].object instanceof THREE.Mesh) {
                    console.log(intersects[i].object);
                    // intersects[i].object.material.color.set('red')
                    ElMessage(
                        {
                            message: '点击了' + intersects[i].object.name,
                            type: 'success',
                        })
                    break
                }
            }
            // console.log(intersects[0].object);
            // const object = intersects[0].object;
            // if (object.name === 'Model1') {
            //     console.log(111);
            // }
            // console.log(object.name);
        }
    }
    // const sprite = new THREE.Sprite();
    // sprite.center.set(0,0)
    // scene.add(sprite);


    //监听窗口变化,使画布自适应窗口大小
    window.addEventListener('resize', () => {
        //重置渲染器宽高比
        renderer.setSize(window.innerWidth, window.innerHeight)
        //重置相机宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        //更新相机投影矩阵
        camera.updateProjectionMatrix();
    })

    //设置全屏按钮
    // var btn = document.createElement('button')
    // btn.innerHTML = '点击全屏'
    // btn.style.position = 'absolute'
    // btn.style.left = '10px'
    // btn.style.top = '10px'
    // btn.style.zIndex = '999'
    // btn.onclick = function () {
    //     // renderer.domElement.requestFullscreen() //画布全屏
    //     document.body.requestFullscreen()  //body全屏
    // }
    // document.body.appendChild(btn)


    //退出全屏按钮
    // var exitBtn = document.createElement('button')
    // exitBtn.innerHTML = '退出全屏'
    // exitBtn.style.position = 'absolute'
    // exitBtn.style.left = '10px'
    // exitBtn.style.top = '100px'
    // exitBtn.style.zIndex = '999'
    // exitBtn.onclick = function () {
    //     document.exitFullscreen()
    // }
    // document.body.appendChild(exitBtn)


    //GUI的使用
    //创建GUI
    // const gui = new GUI()

    // let eventObj = {
    //     Fullscreen: function () {
    //         document.body.requestFullscreen()
    //     },
    //     ExitFullscreen: function () {
    //         document.exitFullscreen()
    //     }
    // }
    //添加按钮
    // gui.add(eventObj, 'Fullscreen').name("全屏");
    // gui.add(eventObj, 'ExitFullscreen').name("退出全屏");
    // //控制立方体位置
    // // gui.add(cube.position,"x",-5,5).name("立方体x轴位置")
    // // gui.add(cube.position,"x").min(-10).max(10).step(1).name("立方体x轴位置") //可以控制每次移动距离
    // // gui.add(cube.position,"y").min(-10).max(10).step(1).name("立方体y轴位置") //可以控制每次移动距离
    // // gui.add(cube.position,"z").min(-10).max(10).step(1).name("立方体z轴位置") //可以控制每次移动距离
    // let folder = gui.addFolder("立方体位置")
    // folder.add(cube.position, "x").min(-10).max(10).step(1).name("立方体x轴位置").onChange((val: any) => {
    //     console.log("立方体x轴位置:" + val);  //一直打印
    // })
    // folder.add(cube.position, "y").min(-10).max(10).step(1).name("立方体y轴位置").onFinishChange((val: any) => {
    //     console.log("立方体y轴位置:" + val);  //拖完打印
    // })
    // folder.add(cube.position, "z").min(-10).max(10).step(1).name("立方体z轴位置")
    // gui.add(parentMaterial, "wireframe").name("父元素线框模式")
    // let colorParams = {
    //     cubeColor: "blue",
    // }
    // gui.addColor(colorParams, 'cubeColor').name("立方体颜色").onChange((val: any) => {
    //     cube.material.color.set(val)
    // })
}

// 创建一个HTML标签
function tag3DSprite(name: any) {
    // 创建div元素(作为标签)
    var div = document.createElement('div');
    div.innerHTML = name;
    Object.assign(div.style, {
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
        // color: 'red',
        // fontSize: '20px',
        // backgroundColor: 'white',
        // pointerEvents: 'none'
    });
    //div元素包装为CSS3模型对象CSS3DSprite
    var label = new CSS3DSprite(div);
    div.style.pointerEvents = 'none';//避免HTML标签遮挡三维场景的鼠标事件
    // 设置HTML元素标签在three.js世界坐标中位置
    label.position.set(0, 2, 0);
    //缩放CSS3DSprite模型对象
    label.scale.set(0.004, 0.004, 0.004);//根据相机渲染范围控制HTML 3D标签尺寸
    label.rotateY(Math.PI / 2);//控制HTML标签CSS3对象姿态角度
    // label.rotateX(-Math.PI/2);
    return label;//返回CSS3模型标签    
}

// 创建一个CSS2渲染器CSS2DRenderer
function labelRenderer(container: any) {
    var labelRenderer = new CSS3DRenderer();
    labelRenderer.setSize(container.offsetWidth, container.offsetHeight);
    labelRenderer.domElement.style.position = 'absolute';
    // 相对标签原位置位置偏移大小
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.left = '0px';
    // //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    labelRenderer.domElement.style.pointerEvents = 'none';
    container.appendChild(labelRenderer.domElement);
    return labelRenderer;
}
onMounted(() => {
    initSence()
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped></style>