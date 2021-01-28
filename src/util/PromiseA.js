// 三个状态
const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled'  // 执行或履行
const REJECTED = 'rejected' // 拒绝

function PromiseA (execute) {
    let self = this;
    self.state = PENDING
    self.onFulfilledFn =[]
    self.onRejectedFn=[]
    function resolve (value) {
        if (self.state === PENDING) {
            self.state = FULFILLED
            self.value = value
        }
    }

    function reject (reason) {
        if (self.state === PENDING) {
            self.state = REJECTED
            self.reason = reason
        }
    }

    try {
        execute(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

PromiseA.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (x) {
        return x
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function (e) {
        throw e
    }
    const self = this
    let promise
    switch (self.state) {
        case FULFILLED:
            promise = new PromiseA(function (resolve, reject) {
                setTimeout(function () {
                    try {
                        onFulfilled(self.value)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
            break
        case REJECTED:
            promise = new PromiseA(function (resolve, reject) {
                setTimeout(function () {
                    try {
                        onRejected(self.reason)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
            break
        case PENDING:

            self.onFulfilledFn = function () {
                onFulfilled(self.value)
            }
            self.onRejectedFn = function () {
                onRejected(self.reason)
            }
            break
    }

}
