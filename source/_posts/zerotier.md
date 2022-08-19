---
title: ZeroTier：也许是最好的异地组网解决方案
date: 2022-06-14 00:00:25
updated: 2022-06-14 00:00:25
categories:
- 教程
tags:
- 网络
keywords: 异地组网, ZeroTier, 内网穿透
cover: https://img.dreamfall.cn/cover/7.webp
description: 随时随地访问家里设备
---
## 介绍
Zerotier是一款用于构建异地虚拟局域网的工具，让你在世界任何地方访问家里的设备或者其他客户端
功能与蒲公英类似

- 优点：操作简单、支持设备多、速度快、免费版本支持一百个设备、支持NAT转发

## 搭建
### 账号
前往[zerotier官网](https://my.zerotier.com)注册账号
注册登录后你可以看到以下界面
![1](https://img.dreamfall.cn/post/zerotier/1.webp)
选择选择'Create A Network'(创建一个网络)
然后系统就会分配一个虚拟网络给你，保存好最左列的'NETWORK ID'后面配置会需要
在里面你可自由的配置'Name'网络名称（一点用都没有）、'Access Contral'访问权限（肯定是私人啦）、路由地址和管理你的客户端（反正自定义程度比起蒲公英很高就对了）
### Linux
Linux提供了官方的安装脚本和docker两种方式
{% tabs linux, -1 %}
<!-- tab 脚本@fab fa-linux -->
如果您是基于 Debian 和 RPM 的发行版，包括 Debian、Ubuntu、CentOS、RHEL、Fedora 等可以直接在终端中执行下面命令
```sh
curl -s https://install.zerotier.com | sudo bash
```
然后在终端输入
```sh
zerotier-cli join 前面提到的NETWORK ID
```
这样Linux端就配置完了，但还不能使用，需要授权，请查看下面网页端配置
<!-- endtab -->

<!-- tab docker@fab fa-docker -->
前提：你的Linux系统已经安装了docker
1. 创建目录以存储ZeroTier的身份和配置
```sh
mkdir /var/lib/zerotier-one
```
2. 获取镜像并运行
```sh
docker run -d           \
  --name zt             \
  --restart=always      \
  --device=/dev/net/tun \
  --net=host            \
  --cap-add=NET_ADMIN   \
  --cap-add=SYS_ADMIN   \
  -v /var/lib/zerotier-one:/var/lib/zerotier-one zerotier/zerotier-synology:latest
```
3. 加入网络
```sh
docker exec -it zt zerotier-cli join 前面提到的NETWORK ID
```
这样Linux端就配置完了，但还不能使用，需要授权，请查看下面网页端配置
<!-- endtab -->
{% endtabs %}
### Windows
前往[官网](https://www.zerotier.com/download/)下载客户端
安装启动后在托盘中可以看到
![2](https://img.dreamfall.cn/post/zerotier/2.webp)
选择join new network
![3](https://img.dreamfall.cn/post/zerotier/3.webp)
输入前面提到的NETWORK ID
这样Windows端就配置完了，但还不能使用，需要授权，请查看下面网页端配置
### 安卓/IOS
安装/IOS先下载APP，安装可到Google商店，IOS前往App Store
如果你没有Google商店我提供了[蓝奏云下载](https://wws.lanzouh.com/iyxSd06d6hsb?password=28bh)，密码'28bh'
打开APP
![4](https://img.dreamfall.cn/post/zerotier/4.webp)
点击右上角+号，输入前面提到的NETWORK ID，Add network
![5](https://img.dreamfall.cn/post/zerotier/5.webp)
要使用就点右边的开关就行
![6](https://img.dreamfall.cn/post/zerotier/6.webp)
### 网页端配置（必须）
先进入网络配置，找到members，将前面的勾打上，通过认证，那么客户端就并入虚拟局域网了，就可以异地访问了
![7](https://img.dreamfall.cn/post/zerotier/7.webp)
## 高级玩法（NAT转发）
适用于Linux系统，将局域网一台机器当作中转连接整个局域网
首先zerotier官网的网段为：192.168.191.0/24，中转设备在zerotier的ip是192.168.191.100
找到zerotier端的Advanced，Add Routes，左侧填入个人路由器局域网的网段（也就是中转设备局域网网段），例如我的中转设备在路由器的网段是192.168.1.x，则此处填写192.168.1.0/24，右侧（via）填入上一步记下的地址，例如我的地址是192.168.191.100。
![8](https://img.dreamfall.cn/post/zerotier/8.webp)
接下来配置中转设备
开启net.ipv4.ip_forward，在终端输入
```sh
echo 'net.ipv4.ip_forward=1' >> /etc/sysctl.conf
sysctl -p
iptables -t nat -A POSTROUTING -s 192.168.191.0/24 -j MASQUERADE
```
此处的192.168.191.0/24，即为zerotier端的ip所在网段，大家要改成自己的。
接下来配置完成，连上zerotier直接能在外使用192.168.1.1就能访问路由器
## 注意
如果发现安卓/IOS端无法访问请检查use cellular data是否开启
![9](https://img.dreamfall.cn/post/zerotier/9.webp)
## 总结
zerotier虽然配置比蒲公英复杂，但是功能还是很强的，主要是免费