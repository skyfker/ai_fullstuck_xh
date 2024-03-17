## 怎么介绍自己的项目

- 全栈项目
    - VUE 全家桶 （重点做）
    - node 后端api服务 koa/express （登录 + post表）
    - ElementPlus 搭建后台 --文章列表页 登录页

- 介绍项目
    - 后端api服务
        - sql 设计
            - user表
                CREATE TABLE `user` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `username` varchar(255) NOT NULL,
                    `password` varchar(255) NOT NULL,
                    PRIMARY KEY (`id`)
                    UNIQUE KEY `username` (`username`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

                user表尽量简单，这是最重要的表，次要内容分表设计，有利于性能优化

            - avatar 表
                CREATE TABLE `avatar` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `user_id` int(11) NOT NULL,
                    `mime_type` varchar(255) NOT NULL,  // 上传的头像文件类型
                    `file_name` varchar(255) NOT NULL,
                    `size` int(11) NOT NULL,
                    `avatar` varchar(255) NOT NULL,
                    PRIMARY KEY (`id`),
                    KEY `user_id` (`user_id`),  //给uid加索引，方便查询
                    CONSTRAINT `avatar_user_id`,
                    FOREIGN KEY (`user_id`) ,
                    REFERENCES `user` (`id`) 
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

                索引meet查询
                SELECT file_name, size, avatar FROM avatar WHERE user_id = 1;

- sql 是项目的核心
- 面试官心态 考察索引
    - 主键索引  autoincrement
    - 唯一索引  name不重复
    - 普通索引
        索引是为了提升查询速度
        项目里用了那些索引？
        分配相应的空间数据结构 来加速查询 索引是数据库的主要性能瓶颈  
    - 外键索引

                CREATE TABLE `comment` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `user_id` int(11) NOT NULL,
                    `article_id` int(11) NOT NULL,
                    `parent_id` int(11) DEFAULT NULL,
                    `content` varchar(255) NOT NULL,
                    PRIMARY KEY (`id`),
                    KEY `user_id` (`user_id`),
                    KEY `article_id` (`article_id`),
                    KEY `parent_id` (`parent_id`),
                    CONSTRAINT `comment_user_id`,
                    FOREIGN KEY (`user_id`) ,
                    REFERENCES `user` (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
