import { createWebHashHistory, createRouter, Router } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDefault from './components/DocDefault.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDefault },
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs },
            ]
        },
    ]
})

router.afterEach(() => {
    console.log('router change')
})