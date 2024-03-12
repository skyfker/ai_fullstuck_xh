class myPromise {
    constructor(executor) {
        this.status = 'pending' // pending, fulfilled, rejected
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallback = []   //then 的回调
        this.onRejectedCallback = []    //catch 的回调

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                //then 的回调在这里触发
                this.onFulfilledCallback.forEach(callback => callback(value))
            }
        }

        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                //catch 的回调在这里触发
                this.onRejectedCallback.forEach(callback => callback(reason))
            }
        }
        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        const newPromise =  new myPromise((resolve, reject) => {
            if(this.status === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value)
                        resolve(result)
                    }
                    catch (error) {
                        reject(error)
                    }
                }, 0)
            }

            if(this.status === 'rejected') {
                setTimeout(() => { // 模拟异步，但是模拟不了微任务
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                    }
                    catch (error) {
                        resolve(error)
                    }
                }, 0)
            }

            if (this.status === 'pending') {
                this.onFulfilledCallback.push(() => {
                    setTimeout(() => {
                        try {
                            const result = onFulfilled()
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    },0)
                })
                this.onRejectedCallback.push(()=> {
                    setTimeout(() => {
                        try {
                            const result = onRejected()
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    },0)
                })
            }
        })
        return newPromise
    }
    // 接收一个数组，数组中的promise对象谁先发生状态变更，race就跟着变更状态
    static race(promises) {
        return new myPromise((resolve, reject) => {
            promises.forEach((promise) => {
                promise.then((value) => {
                    resolve(value)
                },
                (reason) => {
                    reject(reason)
                }
                )
            })
        })
    }

    static all(promises) {
        return new myPromise((resolve, reject) => {
            let result = []
            promises.forEach((promise, index) => {
                promise.then((value) => {
                    result[index] = value
                    if(result.length === promises.length) {
                        resolve(result)
                    }
                },
                (reason) => {
                    reject(reason)
                }
                )
            })
        })
    }
}