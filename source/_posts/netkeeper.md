---
title: 使用路由器解除浙江闪讯设备限制
tags:
- 教程
- 闪讯
- 网络
categories:
- [教程,网络]
description: 学校的校园网一次只能登录一个设备，这对我这种设备多的学生非常难受
keywords: 闪讯, 教程, 破解
cover: https://img.dreamfall.cn/cover/12.webp
date: 2022-10-11 23:10:00
updated: 2022-10-11 23:10:00
---

## 背景
经过的高考，我终于来到了大学，只不过我这校园网是真的令人无语，虽然网速能到100M，但是却只能**一个**设备登录，并且还得要用专门的软件登录

而我的设备却非常多（两个手机，电脑，香橙派）

并且我们寝室也有联机需求，需要共用一个局域网

## 寻找解决方案
学校的校园网认证需要用到**netkeeper（闪讯）**这个软件

![闪讯](https://img.dreamfall.cn/post/netkeeper/1.webp)

于是，我先从软件下手，在软件安装目录寻找校园网认证的原理

然后，当我翻到日志文件夹的时候，找到了一个叫**xlpppoe.log**文件，已经在日志文件中找到了**PPPoE**服务

![日志](https://img.dreamfall.cn/post/netkeeper/2.webp)

于是，我觉的有可能校园网认证是通过**PPPoE拨号**实现的

同时，我在Windows网络里看到由闪讯创建的拨号连接，这让我更加确信这个选择
![网络](https://img.dreamfall.cn/post/netkeeper/5.webp)

## 尝试解决问题

既然软件是通过**PPPoE**拨号实现认证的，那么，直接使用路由器的PPPoE拨号不就能实现了吗

于是，我把路由器wan口连上面板，然后使用PPPoE拨号上网，结果居然成功了，路由器成功的获取到了ip地址，网页也能正常打开

![路由器](https://img.dreamfall.cn/post/netkeeper/3.webp)

## 扩展
由于闪讯的密码每隔28小时需要更换，每次更换都要登录路由器后台，非常麻烦，于是我在网上找到了**openwrt**的一个插件[闪讯拦截](https://github.com/miao1007/Openwrt-NetKeeper)

### 介绍
闪讯拦截这个插件可以通过拦截电脑或手机的拨号请求，截取账号和密码，在路由器上自动PPPoE拨号，从而简化拨号步骤

- 缺点：仅支持openwrt固件，需要动手能力
- 优点：简化步骤，相对方便

### 短信自动登录
关于短信自动登录，这里又涉及到另外一个APP：[闪讯机器人](https://github.com/kuretru/SingleNet-Robot)

只需要在路由器上装上``luci-mod-rpc``这个包，再在手机客户端配置好账号，密码和发送卡号、定时器就能使用

![闪讯机器人](https://img.dreamfall.cn/post/netkeeper/4.webp)

- 优点：完全自动，解放双手
- 缺点：仅支持安卓，容易掉后台，手机需要连到路由器

## 总结
解除限制方法非常简单，使用路由器的PPPoE拨号就可完成

PPPoE账号和密码就是netkeeper中的账号密码