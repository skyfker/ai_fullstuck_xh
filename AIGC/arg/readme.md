- Google api
    - serpapi search_google_news
    - 数据转换  [item['link']for item in result['news_result']]

- LLM
    当它上线的那一刻，它的训练已经完成，只能基于它拥有的知识去推理
    如何让大模型拿到最新的信息来生成内容
    - 大模型黑盒子  prompt  详细一些，  分布，目标
    - 不能去乱说 ，但是我们要写文章利用大模型AIGC能力
        让prompt 拥有这个内容，agent tool 

- Autogen
    请一个管家UserProxy Agent 接收用户任务
    AssistantAgent 做具体任务，写代码， 