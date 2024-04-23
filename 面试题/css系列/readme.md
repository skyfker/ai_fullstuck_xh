# 1. 说说你对css盒模型的理解
1. 是什么？
浏览器在页面布局时，将所有的元素表示为一个个矩形盒子（文本节点是匿名盒子），每一个盒子包含四个部分：content, padding, border, margin

2. 标准盒模型
盒子总宽度：width + padding + border + margin

3. 怪异盒模型(IE)
盒子总宽度: width + margin

# 2. css中的选择器有哪些？说说优先级
1. id选择器
2. 类名选择器
3. 标签选择器
4. 后代选择器
5. 子级选择器
6. 相邻兄弟选择器
7. 群族选择器

8. 属性选择器
9. 伪元素选择器
10. 伪类选择器

!important > 内联(直接在标签上写样式) > id选择器 > 类名选择器 > 标签选择器

# 3. 说说css中的单位有哪些？
1. px : 像素单位，屏幕上的发光点
2. rem : 相对单位，相对于跟字体大小
3. em : 相对单位，用于字体上会继承父容器的字体大小，用在它处，是相对于当前容器自己的字体大小来定的
4. vw/vh : 相对单位，相对于窗口宽高比
5. % : 相对单位，相对于父容器

# 4. 说说设备像素，css像素，设备独立像素，dpr，ppi之间的区别？
1. pc端 1px == 1个物理像素
2. 页面缩放比为1:1=时， 1px == 1个物理像素

设备像素 === 物理像素
css像素 === 1px
设备独立像素 === 分辨率
dpr(设备像素比) === 设备像素 / 设备独立像素
ppi === 像素的密度

# 5. css中有哪些方式可以隐藏页面元素？区别是什么？
1. display: none        脱离文档流   无法响应事件     回流重绘
2. visibility: hidden   占据文档流   无法响应事件     重绘
3. opacity: 0           占据文档流   响应事件        重绘 || 不重绘
4. position: absolute   脱离文档流   无法响应事件     回流重绘
5. clip-path: circle(0%) 占据文档流   无法响应事件    重绘

# 6. 谈谈你对BFC的理解
- 是什么
  块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

- 渲染规则
  1. BFC容器在计算高度时，浮动元素的高度也会计算在内
  2. BFC容器内的子元素的margin-top不会和BfC这个父容器发成重叠
  3. 遵照从上往下从左往右的布局排列

- 触发条件
  1. overflow: 不为visible
  2. float
  3. display: inline-block || inline-xxx  || flex  || table-xxx || grid
  4. position: absolute || fixed

- 应用
  清除浮动


# 7. 水平垂直居中的方式有哪些？ !!!!!
1. position: absolute  + translate || margin负值(已知宽高)
2. flex
3. grid
4. table:  text-align  + vertical-align  (子容器不能是块级)
5. margin(已知宽高)

# 8. 三栏布局怎么实现？
- 两栏布局：
1. flex
2. grid
3. float + margin-left

- 三栏布局:
1. flex
2. grid
3. 左右先加载内容后加载：float + margin
4. 圣杯布局：float + margin负值 + position:relative
5. 双飞翼布局：float + margin负值

# 9. flex  弹性布局
1. 容器属性
 - flex-flow  相当于默认情况下的 flex-direction + flex-wrap
 - justify-content  主轴对齐方式
 - align-items
 - align-center 

2. 子元素属性
 - flex-grow   放大比例 默认为 0 ，即如果存在剩余空间，也不放大
 - flex-shrink  缩小比例 默认为 1 ，即如果空间不足，该项目将缩小。
 - flex-basis   默认占据的宽度 它的默认值为auto，即项目的本来大小。
 - flex         flex-grow + flex-shrink + flex-basis
 - order        子元素的排列顺序，越小越靠前
 - align-self   子元素在交叉轴上的对齐方式

# 10. @import 和 link 的区别
1. @import 是 css 的一个语法，link 是 html 的一个标签
2. @import只能用于导入样式，link可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
3. link引入的css文件和html文件是并行加载的，而@import引入的css将在页面被加载完成后才加载。
4. @import存在兼容问题，而link则没有。
