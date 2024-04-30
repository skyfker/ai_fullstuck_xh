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

# Langchain是什么？
- LangChain是一个用于开发由大型语言模型（LLM）支持的应用程序的框架。但是，仅仅靠LLM不足以创建一个强大的应用的，还需要其他计算资源或者知识来源。langchain就是帮助这类应用程序的开发。比如：基于文档数据的问答、聊天机器人、代理。
 Langchain封装的模型主要分为 大语言模型和聊天模型。langchain通过链和链接运作，链中容纳各种人工智能组件，链是由链接组成，通过链接，开发人员可以将复杂任务分成多个小任务，比如：向LLM发送查询，将一种语言翻译成其他语言。
 langchain的核心组件：LLM接口，提示模板，代理，检索模块等。

- OpenAI 是LLM最受欢迎的模型，我们熟知的有GPT-3.5、GPT-4等产品，我们可以通过简单的API调用，实现对文本的生成、翻译、润色、问答等操作。

- Langchain和OpenAi结合，我是用的google的colab，在云端运行代码。首先要安装langchain和openai包。
langchain作为一个开源框架，提供了OpenAI的接口，首先去OpenAI官网生成自己的KEY，然后通过API KEY去调用OpenAI的接口。