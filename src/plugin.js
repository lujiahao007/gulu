import Toast from "./toast";

export default {
    install(Vue,options){
        Vue.prototype.$toast = function (msg){
            let con = Vue.extend(Toast)
            let toast = new con();
            toast.$slots.default = msg
            toast.$mount();
            document.body.append(toast.$el)
        }
    }
}