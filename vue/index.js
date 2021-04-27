console.log('init')

function defineReactive (obj, key, val, customSetter) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {

        },
        set: function (newVal) {

        }
    })
}

function proxy (target, sourceKey, key) {
    //todo will use this replace target
    target[sourceKey]={}
    const definition = {
        enumerable: true,
        configurable: true,
        get: '',
        set: ''
    }
    definition.get = function () {
        return target[sourceKey][key]
    }
    definition.set = function (val) {
        target[sourceKey][key] = val
    }
    Object.defineProperty(target,key,definition)
}

let obj= new Object({
    key1:1
})
proxy(obj,'_data','key1')
console.log(obj)
