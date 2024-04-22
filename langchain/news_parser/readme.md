# Langchain 实战

- LangChain 企业级的AI应用框架
- 写一个爬虫，爬取链接中的新闻标题并以JSON格式输出
    json {
        news：[

        ]
    }
    返回
- 全栈功能
    python/node http.request 
    字符串 正则表达式获取item
    /<item>(.*)</item>/g
- AI 怎么做
- langchain 的价值
    - 提供了AI应用开发的通用架构
        - lang  核心是LLM  而且是抽象的，可插拔的
            - OpenAI 成功后，大部分的模型都借鉴或兼容了他的接口，可以 互换使用
        - chain
            自行车？ llm + prompt + dataset + prompt