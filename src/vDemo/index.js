function setObserveKey (target, key) {
    let temp = null
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get () {
            return temp
        },
        set (newVal) {
            console.log('new value set is ', newVal);
            temp = newVal
        }
    })
}

function component () {
    this.data = {
        name: '111',
        age: 12
    }
    this.props = {}
    return this
}

function initData (component) {
    component._data={}
    for (const key in component.data) {
        setObserveKey(component._data, key)
        component._data[key] = component.data[key]
    }
}

let com1 = new component()
initData(com1)
let com2 = new component()
initData(com2)
console.log(com1);
console.log(com2);
