<template>
    <div>
        <div class="topnav">
            <div class="logo">LOGO</div>
            <ul class="menu">
                <li>菜单一</li>
                <li>菜单二</li>
            </ul>
        </div>
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

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>