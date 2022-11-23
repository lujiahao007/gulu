// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"vgI3":[function(require,module,exports) {
// //手写节流
// const d = function (a){
//     a = a || '123'
//     console.log(a)
// }
//
// function fd (f, time){
//     let timeOut = null
//     return function (...args){
//         if(timeOut){return}
//         f(...args);
//         timeOut = setTimeout( _ => {
//             timeOut = null
//         },time)
//     }
// }
//
// let d2 = fd(d,10 * 1000);
//
//
//
//
//
//
//
//
//
//
// //手写防抖
// const fn = () => {
//     console.log('success')
// }
//
// const cFn = (f,time) => {
//     let timeOut = null
//     return (...args) => {
//         if(timeOut){
//             clearTimeout(timeOut)
//         }
//         timeOut = setTimeout(_ => {
//             f(...args);
//             timeOut = null
//         },time)
//     }
// }
//
// let d3 = cFn(fn,3000)
//
//
//
//
//
//
//
//
//
//
//
// //手写AJAX
// let xhr = new XMLHttpRequest();
//
// xhr.open('GET','/xxx')
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4){
//         if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
//             // success(xhr)
//         }else{
//             // fail(xhr)
//         }
//     }
// }
// xhr.send('{"name":"123"}')
//
//
//
//
//
//
//
//
//
//
//
// //手写简易promise
// class Promise3 {
//     #status = 'pending'
//     constructor(fn) {
//         this.resolve_arr = []
//         this.reject_arr = []
//
//         const resolve = (data) => {
//             this.#status = 'fulfilled'
//             const fn = this.resolve_arr.shift()
//             if(!fn) return
//             const x = fn.call(undefined,data)
//             resolve(x)
//         }
//         const reject = (data) => {
//             this.#status = 'rejected'
//             const fn = this.reject_arr.shift()
//             if(!fn) return
//             const x = fn.call(undefined, data)
//             reject(x)
//         }
//
//         fn.call(undefined,resolve,reject)
//     }
//     then(fn1,fn2){
//         this.resolve_arr.push(fn1)
//         this.reject_arr.push(fn2)
//     }
// }
//
// const pms = new Promise3(function (resolve,reject){
//     setTimeout(_ => {
//         reject('123')
//     },3000)
// })
//
// pms.then((data)=>{console.log(data)}, (data)=>{console.error(data)})

// const pms2 = new Promise(function (resolve,reject){
//     reject('123')
// })
// pms2.then((data)=>{console.log(data)}, (data)=>{console.error(data)})

//
//
//
//
//
//
//
//
//
//
//
//手写promise.arr
// Promise.myall = (list) => {
//     let num = 0;
//     let result = []
//     return new Promise((resolve,reject)=> {
//         list.forEach((item,index) => {
//             item.then((res) => {
//                 num += 1
//                 result[index] = res
//                 if(num === list.length){
//                     resolve(result)
//                 }
//             }).catch((err) => {
//                 reject(err)
//             })
//         })
//     });
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//手写深拷贝1
// const b = JSON.parse(JSON.stringify(a));
//
// //手写深拷贝2
// const cache = new Map();
// const deepClone = (a) => {
//     if(a instanceof Object) { // 不考虑跨 iframe
//         if(cache.get(a)) { return cache.get(a) }
//         let result
//         if(a instanceof Function) {
//             if(a.prototype) { // 有 prototype 就是普通函数
//                 result = function(...args){ return a.call(this, ...args) }
//             } else {  // 没有 prototype 就是箭头函数函数
//                 result = (...args) => { return a.call(undefined, ...args) }
//             }
//         } else if(a instanceof Array) {
//             result = []
//         } else if(a instanceof Date) {
//             result = new Date(a - 0)
//         } else if(a instanceof RegExp) {
//             result = new RegExp(a.source, a.flags)
//         } else {
//             result = {}
//         }
//         cache.set(a, result)
//         for(let key in a) {
//             if(a.hasOwnProperty(key)){  //不克隆原型
//                 result[key] = deepClone(a[key])
//             }
//         }
//         return result
//     } else {
//         return a
//     }
// }
//
// ////测试代码/////
// const a = {
//     number:1, bool:false, str: 'hi', empty1: undefined, empty2: null,
//     array: [
//         {name: 'frank', age: 18},
//         {name: 'jacky', age: 19}
//     ],
//     date: new Date(2000,0,1,20,30,0),
//     regex: /\.(j|t)sx/i,
//     obj: { name:'frank', age: 18},
//     f1: (a, b) => a + b,
//     f2: function(a, b) { return a + b }
// }
// a.self = a
// const b = deepClone(a)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //手写数组去重1
// let a = [1,2,2,3,3,3]
// const b = Array.from(new Set(a))
//
// //手写数组去重2
// const uniq = (arr) => {
//     let result = []
//     arr.forEach((item) => {
//         let flag = false
//         for(let i = 0;i<result.length;i++){
//             let i_item = result[i]
//             if(item === i_item){
//                 flag = true
//                 break
//             }
//         }
//         if(result.length === 0 || !flag){
//             result.push(item)
//         }
//     })
//     return result
// }
//
//
//
//
//
//
//
//
//
//
//
//手写拖拽
// var flag = false
// var position = []
// var div = document.getElementById('div')
// div.addEventListener('mousedown',function(event){
//     flag = true
//     position = [event.clientX,event.clientY]
// })
// document.addEventListener('mousemove',function(event){
//     if(flag){
//         let left = event.clientX - position[0]
//         let top = event.clientY - position[1]
//         div.style.left = parseInt(div.style.left || 0) + left + 'px'
//         div.style.top = parseInt(div.style.top || 0) + top + 'px'
//         position = [event.clientX,event.clientY]
//     }
// })
// document.addEventListener('mouseup',function(event){
//     flag = false
// })
},{}]},{},["vgI3"], null)
//# sourceMappingURL=/tabs-hard.test.js.map