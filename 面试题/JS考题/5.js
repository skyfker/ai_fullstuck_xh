// Object.hasOwnProperty() // 判断对象是否显示具有的属性

Object.prototype.abc = 123;

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3
    }
};

const obj2 = shallowCopy(obj);

function shallowCopy(obj) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

console.log(obj2);

// --------------新方法推荐-----------------

// const obj2 = structuredClone(obj); // 不能处理 Symbol 和 function

