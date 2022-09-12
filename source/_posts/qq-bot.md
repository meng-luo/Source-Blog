---
title: 我的QQ机器人摸索之路
date: 2021-10-28 00:35:25
updated: 2022-05-01 15:47:25
categories:
- [教程,机器人]
tags:
- QQ
- Bot
keywords: qq机器人
cover: https://img.dreamfall.cn/cover/5.webp
description: 现在是可以差不多正常工作了
---

## 体验

目前的体验还算不错，机器人我也打算开放使用，理论上能7x24小时运行

> 可以添加我的机器人QQ：3270963122  去体验 （[一键添加](https://wpa.qq.com/msgrd?v=3&uin=3270963122&site=qq&menu=yes)）

## 功能

### 功能列表

![功能列表](https://img.dreamfall.cn/post/qbot/1.webp)

### 具体功能展示

![新番](https://img.dreamfall.cn/post/qbot/2.webp)
![点歌](https://img.dreamfall.cn/post/qbot/3.webp)
![b站解析](https://img.dreamfall.cn/post/qbot/4.webp)
![图片](https://img.dreamfall.cn/post/qbot/5.webp)
![抽卡](https://img.dreamfall.cn/post/qbot/6.webp)

只展示了部分，更多功能请自行体验

## 安装

### 前言

本机器人是根据 **[绪山真寻Bot](https://github.com/HibiKier/zhenxun_bot)** 修改而来（也就是稍微改了一下代码，加了几个插件而已）

基于 [nonebot2](https://github.com/nonebot/nonebot2)  和 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp)   开发

- 用于官方文档太简单了，所以我还是自己写吧

### 准备

- 需要到github上的releases中下载对应源码

1. [绪山真寻Bot](https://github.com/HibiKier/zhenxun_bot)

2. [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 下载对应 **系统/架构** 的包

### 配置

- 其实配置也没啥好配置的

#### 配置 go-cqhttp

> 配置可以参考 [官方文档](https://docs.go-cqhttp.org/) ，还挺详细的

{% tabs system1 %}
<!-- tab Windows -->
打开powershell或者cmd

```sh
#先用CD切换到对应目录

#再输入下面命令启动go-cqhttp

./go-cqhttp.exe
```

根据提示生成运行脚本
<!-- endtab -->

<!-- tab Linux -->
打开终端

```sh
#先用CD切换到对应目录

sudo chmod -R 777 go-cqhttp #赋予权限

#再输入下面命令启动go-cqhttp

./go-cqhttp
```

根据提示生成运行脚本
<!-- endtab -->
{% endtabs %}

![配置](https://img.dreamfall.cn/post/qbot/7.webp)

选择3: 反向 Websocket 通信

- 接下来修改配置文件

修改QQ账号密码，设置上报数据类型和反向WS Universal 地址

```yml
#先修改账号密码

account: # 账号相关
  uin: 1233456 # QQ账号
  password: '' # 密码为空时使用扫码登录

#再修改上报数据类型

message:
  # 上报数据类型
  # 可选: string,array
  post-format: array

#最后修改反向WS Universal 地址

servers:
  # 添加方式，同一连接方式可添加多个，具体配置说明请查看文档
  #- http: # http 通信
  #- ws:   # 正向 Websocket
  #- ws-reverse: # 反向 Websocket
  #- pprof: #性能分析服务器
  # 反向WS设置
  - ws-reverse:
      # 反向WS Universal 地址
      # 注意 设置了此项地址后下面两项将会被忽略
      universal: ws://127.0.0.1:8080/cqhttp/ws

```

#### 配置 机器人

> 建议python版本为3.9，如果可以话建议创建虚拟环境以防止不同包之间冲突

1. 安装依赖

    ```sh
    pip isntall -r requirements.txt
    ```

2. 修改congifs/config.py

    主要修改的是ALAPI_TOKEN，TL_KEY，以及数据库的有关配置

    ```py
    # API KEY（必要）
    RSSHUBAPP: str = "https://rsshub.app"  # rsshub
    ALAPI_TOKEN: str = ""  # ALAPI  https://admin.alapi.cn/user/login
    HIBIAPI: str = "https://api.obfs.dev"
    # 图灵
    TL_KEY: List[str] = []

    # 数据库（必要）
    # 如果填写了bind就不需要再填写后面的字段了#）
    # 示例："bind": "postgresql://user:password@127.0.0.1:5432/database"
    bind: str = ""  # 数据库连接链接
    sql_name: str = "postgresql"
    user: str = ""  # 数据用户名
    password: str = ""  # 数据库密码
    address: str = ""  # 数据库地址
    port: str = ""  # 数据库端口
    database: str = ""  # 数据库名称
    ```

- 这样一来，大部分的配置都完成了

### 启动

直接运行

```sh
python bot.py
```

> 盲猜这一步会报错，慢慢排查，就能修好

不出意外的话，你的机器人就可以用了

### 后记

这机器人害我折腾了好久，nonebot的框架自由度很高，有能力的可以自己开发插件。

### 感谢

[Onebot](https://github.com/howmanybots/onebot)  
[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)  
[nonebot2](https://github.com/nonebot/nonebot2)  
[XUN_Langskip](https://github.com/Angel-Hair/XUN_Bot)  
[cappuccilo_plugins](https://github.com/pcrbot/cappuccilo_plugins#%E7%94%9F%E6%88%90%E5%99%A8%E6%8F%92%E4%BB%B6)  
[nonebot-plugin-withdraw](https://github.com/MeetWq/nonebot-plugin-withdraw)  
[nonebot_plugin_songpicker2](https://github.com/maxesisn/nonebot_plugin_songpicker2)  
[nonebot_plugin_manager](https://github.com/Jigsaw111/nonebot_plugin_manager)  
[Genshin_Impact_bot](https://github.com/H-K-Y/Genshin_Impact_bot)  
[nonebot2_luxun_says](https://github.com/NothAmor/nonebot2_luxun_says)  
[AnimeThesaurus](https://github.com/Kyomotoi/AnimeThesaurus)  
[omega-miya](https://github.com/Ailitonia/omega-miya)
