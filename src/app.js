import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from "./button-group";

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue ({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})


import chai from 'chai'
const expect = chai.expect
//单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'set'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#iset')
    //销毁
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'set',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#iloading')
    //销毁
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'set',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let href = button.$el.getAttribute('dir')
    expect(href).to.eq('rtl')
    //销毁
    button.$el.remove()
    button.$destroy()
}