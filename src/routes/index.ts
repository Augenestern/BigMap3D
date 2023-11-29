import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
 
// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/map",
    component: () => import("@/components/mainMid/mapCopy.vue"),
  },
  {
    path: "/threejs",
    component: () => import("@/components/mainMid/threejs.vue"),
  },
  {
    path: "/threeShow",
    component: () => import("@/components/mainMid/threeShow.vue"),
  },
  {
    path: "/camera",
    component: () => import("@/components/mainMid/camera.vue"),
  },
  {
    path: "/echartMap",
    component: () => import("@/components/mainMid/echartMap.vue"),
  },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 

router.beforeEach((to,from,next)=>{
  if(to.path === "/"){
    next({path:"/home"})
  }else{
    next()
  }
})
// 3导出路由   然后去 main.ts 注册 router.ts
export default router