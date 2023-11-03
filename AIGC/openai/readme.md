# 跨境电商
AI 开店
玩具店 -> 拼多多海外版
- 翻译? NLP 不用打开Google翻译，写程序
    pipeline('translate')
    AIGC 生成
- 卖什么货
- 卖多少钱
- 营销内容怎么写有搞头

- 如何让openai 帮你开店
    大模型（openai 接口调用） + prompt Engineer （编写prompt）


# prompt 工程
会问问题的人比解决问题的更nb
大模型超越了大部分人的能力  

## openai 封装的过程
人生苦短 我用python
特别适合nlp
一个功能写法就一种
风格 缩进
def get_response(prompt)：
    调用了openai 里的completions模块（其他模块）.cerate方法
    向openai发出网络请求
    completions = openai.Completions.create(
        engine=，
        prompt=， 
        temperature=0，
        max_tokens=512,   
    )
    <!-- 同步的  js 异步的 -->
    print(completions)
    result = completions[0].choices.text
    return result