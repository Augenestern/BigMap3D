<template>
    <div>111
    </div>
</template>

<script setup lang="ts">

import ydtsJson from '../../assets/ydtsJson.json'
let aa = ydtsJson.features[0].geometry.coordinates[0]
let xx = parseFloat(((aa[0][0] + aa[2][0]) / 2).toFixed(6))
let yy = parseFloat(((aa[0][1] + aa[2][1]) / 2).toFixed(6))
let lsCenter = [xx, yy]
console.log(lsCenter);

onMounted(() => {
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped></style>