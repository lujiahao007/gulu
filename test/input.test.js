// import sinon from "sinon";

import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
import sinon from "sinon";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props',()=>{
        const Constructor = Vue.extend(Input)  //创建对象
        let vm

        // 在每一个测试前面添加的代码
        beforeEach(function (){

        });

        //在每一个测试的后面添加的代码
        afterEach(function (){
            vm.$destroy()  //销毁对象
        })

        it('接受 value',()=>{
             vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('接受 disabled',()=>{
             vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接受 readonly',()=>{
             vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('接受 readonly',()=>{
             vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#iinfo')
            const inputElement = vm.$el.querySelector('span')
            expect(inputElement.innerText).to.equal('你错了')
        })
    })

    describe('事件',()=>{
        const Constructor = Vue.extend(Input)  //创建对象
        let vm

        //在每一个测试的后面添加的代码
        afterEach(function (){
            vm.$destroy()  //销毁对象
        })

        it('支持 change / input / focus / blur 事件',()=>{
            ['change' , 'input' , 'focus' , 'blur'].forEach((item) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(item,callback)
                //出发input的change 事件
                let event = new Event(item)
                let inputEvent = vm.$el.querySelector('input')
                inputEvent.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)  //测试change事件有回调，并且测试了change事件的第一个参数是event
            })
        })
    })
})