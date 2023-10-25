<template>
    <div>
        <el-button type="primary" @click="toHome">11</el-button>
    </div>
</template>

<script setup lang="ts">
const router = new (useRouter as any)
const toHome = ()=>{
    router.push('/home')
}
console.log(123123);
</script>
