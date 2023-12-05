- 阿里上班
    手淘、菜鸟、阿里巴巴、钉钉...
    用户系统中心 好处是集中管理用户

    宕机的危险？

    pv/uv 访问压力巨大
    pv  用户访问页面数 访问20页面
    uv  10万人  明确的登录 + ip + mac

    压力到底在哪
    - 流量洪峰
        服务器集群  随机算法  
    - 数据库在哪？
        select 查询，I/O瓶颈
        内存 ，cpu
        解决方案？ SQL 性能低

    - 加缓存 
        id  user  陈......
        I/O -> memory cache (内存key=>val)
        select 真查询 cache set 一下
        cache  id  get
        90% 数据库查询挡住了
    - 用户模块
        不一定 缓存命中
        99% 命中 cache key=> val
        重写了数据库 重新读一次
        cache 也是有容量上限的 内存上限
        
LRU 最近最少使用原则
    刚进来， 频繁进来
    一月之前来过，后面没来了

    redis
    容量  set get
    lru  删除
    