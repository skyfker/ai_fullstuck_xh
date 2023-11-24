# typeof
1. 可以准确的判断除null之外的原始类型
2. 可以判断function

# instanceof
1. 只能判断应用类型
2. 通过原型链的查找来判断

# Object.prototype.toString()
    当调用 toString 方法时，将执行以下步骤：
1. 如果 this 值为 undefined，则返回字符串 "[object Undefined]"。
2. 如果 this 值为 null，则返回字符串 "[object Null]"。
3. 设 O 是ToObject(this)，如果传的原始类型，那就回调用ToObject将原始类型转换成对象
4. 设 class 是 O 的 [[Class]] 内部属性的值
5. 返回 String 值，该值是连接三个 String"[Object"、class、"]"
 