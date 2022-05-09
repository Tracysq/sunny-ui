<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>Sunny UI</h1>
            <h2>一个 Vue 3 UI 框架</h2>
            <p class="actions">
                <a>Github</a>
                <a>开始</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>

</style>