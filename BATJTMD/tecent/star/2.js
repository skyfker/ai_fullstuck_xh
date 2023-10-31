/** 
 * @func-获得文章的点赞描述
 * @params { Array } names 点赞人的名字数组
 * @return { String } 描述
 * @author cyy 2023/10/31 腾讯商业部
*/
// 驼峰式的命名方式  可读性
function getPostLikes(names) {
    const templates = [
        '暂无人点赞',
        '{name}点赞了这篇文章',
        '{name}和{name}点赞了这篇文章',
        '{name}、{name}和{name}点赞了这篇文章',
        '{name}、{name}和{n}个人点赞了这篇文章',
    ]
    // Math js 内置的数学对象
    let idx = Math.min(names.length,4);//0，1，2，3，4
    //用户数量对应的规模
    //正则表达式 规格  /  规则   /
    // g 修饰符 全局匹配
    return templates[idx].replace(/{name}|{n}/g,function(val){
        //
        return val === '{name}' ? names.shift(): names.length;
    })
}


// console.log(getPostLikes([]))
// console.log(getPostLikes(['美美']))
// console.log(getPostLikes(['美美','燕子']))
// console.log(getPostLikes(['美美','燕子','徐昊']))
console.log(getPostLikes(['美美','燕子','徐昊','万先澄']))




