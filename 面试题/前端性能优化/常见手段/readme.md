

14. if-else  vs  switch-case
  switch-case 的性能更好。

15.  避免页面卡顿
  setTimeout，setInterval 因为跟屏幕刷新率不一致，可能会造成页面的闪烁。用requestAnimationFrame，它就是在屏幕刷新时，会执行回调函数。

16. 开辟多线程 （web Worker）
  JS 默认 是单线程的
  实现：input框上传一张图片，页面上预览出来。
  new FielReader(), 它有一个方法 readAsArrayBuffer(),转成二进制流，......假设这张图片需要2s，那在这2s，你是进行不了别的操作的，所以需要开一个线程-- new Worker('worker.js')-->把代码放到worker.js文件里执行

17. css选择器不要太复杂

18. 尽量使用弹性布局 （性能好）