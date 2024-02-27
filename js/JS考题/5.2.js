Object.prototype.abc = 123;

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3
    }
};

const obj2 = deepCopy(obj);

function deepCopy(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] !== 'object' || obj[key] === null) { // 原始类型
                newObj[key] = obj[key];
            } else {
                newObj[key] = deepCopy(obj[key]);
            }
        }
    }

    return newObj;
}

console.log(obj2);