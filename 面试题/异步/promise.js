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
      let count = 0
      let arr = []

      // 判断promises中的所有的promise状态是否都为fulfilled
      promises.forEach((promise, i) => {
        promise.then(
          (value) => {
            count++
            arr[i] = value
            if (count === promises.length) {
              resolve(arr)
            }
          },
          (reason) => {
            reject(reason)
          }

        )
      })

    })
  }

  static any(promises) {
    return new myPromise((resolve, reject) => {
      let count = 0, arr = []

      promises.forEach((promise, i) => {
        promise.then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            count++
            arr[i] = reason
            if (count === promises.length) {
              reject(new AggregateError(arr, 'All promises were rejected'))
            }
          }
        )
      })
    })
  }

  finally(callback) {
    return this.then(
      (value) => {
        return Promise.resolve(callback()).then(() => value)
      },
      (reason) => {
        return Promise.resolve(callback()).then(() => reason)
      }
    )
  }

  static allSettled(promises) {
    return new myPromise((resolve, reject) => {
      let arr = [], count = 0

      promises.forEach((promise, i) => {
        promise.then(
          (value) => {
            arr[i] = {status: 'fulfilled', value: value }
          },
          (reason) => {
            arr[i] = {status: 'rejected', reason: reason }
          }
        ).finally(() => {
          count++
          // 所有promise状态都变更了
          if (count === promises.length) {
            resolve(arr)
          }
          
        })
      }) 

      
    })
  }

  static resolve(value) {
    return new myPromise((resolve) => {
      resolve(value)
    })
  }
}