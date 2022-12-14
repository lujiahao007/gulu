import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Content from './content.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
// import Toast from "./toast";
import Plugin from "./plugin";
import Tabs from "./tabs";
import TabsBody from "./tabs-body";
import TabsHead from "./tabs-head";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import CollapseItem from "./collapse-item";
import Collapse from "./collapse";

Vue.use(Plugin)

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse-item',CollapseItem)
Vue.component('g-collapse',Collapse)

new Vue({
    el: '#app',
    data: {
        selectedTab: ['2','1']
    },
    created(){
    },
    mounted() {

    },
    methods: {
        yyy(event){
            console.log('app',event,this.selectedTab);
        }
    }
})