//queue 先进先出 只有push 和 shift 方法的数组
const queue = []
queue.push('辣椒炒肉')
queue.push('辣椒炒辣椒')
queue.push('辣椒炒蛋')
while(queue.length){
    const top = queue.shift()
    console.log('今晚吃' + top);
}