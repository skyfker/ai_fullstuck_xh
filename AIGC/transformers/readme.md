# AI + 前端如何结合
图像识别等 nlp 任务

- transformers
    pipeline
    前端和 transformers 怎么结合？
    前端 -> 展示，可视化，交互

- AI 前端应用体验

- coze bot 应用图标生成
    - 以前需要设计师设计好图标之后，我们上传。
    - 现在不需要设计师了，LLM 的AIGC帮助我们生成。
        - 前端通过弹窗组件，收集名字 + 描述 文本内容
            - LLM 需要一些时间，Loding 效果很nice。
        - 通过 Ajax 传给LLM  生成图片(AIGC)。
        - 生成的图片存在服务器端，static 静态服务器
        - 前端拿到url 展示，完成。

    - 图片上传体验：
        input type=file 可定制不高，直接 display：none，再lable for 触发

    - 本地预览，优化图片上传体验
        - 传统需要先上传到服务器，得到src才能显示，但是这样太慢了。
        - html 5 新特性，FileReader 读取本地文件，File(e.target.files[0], 'image/png')
            FileReader 将文件读取到内存中...
            DOM img

    - 前端 + AI结合
        - ajax + LLM api 调用 coze
        - transformers.js 浏览器端
        - 浏览器加载大模型
        - await 调用接口
        - 返回结果
