const fiterLowerNumber = number => {
    return array => {
        let result = []
        for (let i = 0; i < array.length; i++) {
            let currentValue = array[i]
            if (currentValue < number) {
                result.push(currentValue)
            }
        }
        return result
    }
}

const filterLowerThan10 = fiterLowerNumber(10)
const res = filterLowerThan10([1, 2.2, 3, 500, 200])
console.log(res)

const curry = (fn, length) => {
    length = length || fn.length
    return function (...args) {
        if (args.length < length) {
            return curry(fn.bind(this, ...args), length - args.length)
        } else {
            return fn.call(this, ...args)
        }
    }
}

const curry2 = fn =>
    judge = (...arg1) =>
        agr1.length >= fn.length
            ? fn(arg1)
            : (...arg2) => judge(...arg1, ...arg2)
