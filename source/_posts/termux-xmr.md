---
title: 使用手机+termux实现挖矿
date: 2021-7-27 16:42:05
updated: 2022-2-5 10:04:05
categories:
- 教程
tags:
- termux
- 教程
keywords: 挖矿
cover: https://img.dreamfall.cn/cover/4.webp
description: 这年头什么都能挖矿，也不知道啥时候能消停
---
{% folding red, 查看参考教程 %}

{% sitegroup %}

{% site 闲的没事？用手机termux挖矿吧, url=https://xn--8qvt52h.top/teach/313.html, screenshot=https://www.helloimg.com/images/2022/02/05/GKsL8A.md.jpg, avatar=https://gitee.com/hshx123/picplus/raw/master/1595119088132.png, description=参考了部分教程使用 %}

{% endsitegroup %}

{% endfolding %}

{% note red 'fas fa-fan' flat%}
用手机挖矿，感觉本末倒置了诶~
{% endnote %}

---

## 准备

1.  高级终端Termux，可以到官方[下载地址](https://f-droid.org/packages/com.termux/)下载。

2. XMR钱包账号，下文会介绍申请

---

## 安装发行版Ubuntu

- Termux内输入并回车

```sh
. <(curl -L gitee.com/mo2/linux/raw/2/2)
```

- 执行结束后会弹出这样一个界面

### 选择中文简体，给予权限

![选择语言](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-1.webp)

---

- 然后会进入图示界面

> 建议先更新一下  
选择{% emp 更新 %}，然后一路回车即可

![工具主页](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-1.webp)

---

### 选择第一个**proot容器**（如果有root权限可以使用第二个）

![工具主页](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-2.webp)

---

### 然后选择第一个：arm发行列表

> 因为现在的手机CPU都是arm架构的，如果跨CPU的还有折损

![proot容器](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-3.webp)

---

### 选择Ubuntu(其实其他版本也差不多)

![arm发行版](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-4.webp)

---

### 选择版本

- 随便选一个即可，但建议选LTS(长期维护)

![Ubuntu](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-5.webp)

- 终端配色，小键盘和一言看个人喜好，dns，时区默认就行

创建sudo用户选择“NO”
接下来按照图片中的选（如果有自己需求的可以自行选择）
![sudo](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-7.webp)

- zsh终端美化

![zsh](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-8.webp)

- 安装后删除安装文件

![delete](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-9.webp)

- 读取头像

![头像](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-10.webp)

- 启动工具

![启动工具](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-11.webp)

---

### 接下来一路回车就行

- 安装过程需要很久，请等待！

等安装完会弹出下面的界面了

![工具(2)主页](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-12.webp)

---

### 选择退出

![工具(2)主页](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-12.webp)

> 安装完成会自动进入tmoe工具
> ![完成](https://img.dreamfall.cn/post/termux-xmr/Ubuntu-13.webp)

---

## 申请挖矿钱包(XMR)

> 两种申请方法，一种为在线钱包，在线申请，安全度较低。
> 另一种为本地钱包，需要电脑，安全度较高。

- 这里以在线钱包为例子

### 进入网站

进入官方钱包申请地址: <https://wallet.mymonero.com>
进入选择“Create new wallet”

![xmr注册](https://img.dreamfall.cn/post/termux-xmr/zc-1.webp)

### 获取密码

勾上“GOT IT!”点击右上角的{% emp “NEXT” %}

接下来会出现一段中文，如图

![xmr密码](https://img.dreamfall.cn/post/termux-xmr/zc-2.webp)

- 这段中文就是你钱包的登陆密码！请妥善保存
- 丢失后{% emp 无法找回 %}

### 校验密码

保存好后点击“_NEXT_”，现在你需要输入刚才密码的前几个字，输入成功即可创建你的钱包

![xmr注册](https://img.dreamfall.cn/post/termux-xmr/zc-3.webp)

### 获取地址

**Address(钱包地址)**就是之后挖矿要用的收款地址

![xmr注册](https://img.dreamfall.cn/post/termux-xmr/zc-4.webp)

## 自行编译C3-xmrig

> 由于安装的ubuntu是arm架构，但C3-xmrig并未提供aarch64的二进制版本，所以需要手动编译

### 进入Ubuntu

打开termux终端
输入下面命令启动Ubuntu

```sh
debian
```

### 安装依赖

进入系统后输入

```sh
apt-get install git build-essential cmake libuv1-dev libssl-dev libhwloc-dev -y
```

这些软件包是之后编译必备的，如果不安装可能会报错

### 克隆代码

>此处使用C3pool提供的代码(效果: 在CPU和GPU上进高收益币种自动切换（Nvidia，AMD）)

{% ghcard C3Pool/xmrig-C3 %}

在终端输入

```sh
git clone https://github.com/C3Pool/xmrig-C3.git
```

![git](https://img.dreamfall.cn/post/termux-xmr/xmr-1.webp)

### 去除抽水率

```sh
# 这里使用vim编辑器，具体使用方法自行百度
vim xmrig-C3/src/donate.h
```

然后修改

```d
constexpr const int kDefaultDonateLevel = 1
constexpr const int kMinimumDonateLevel = 1
```
把“1”改成“0”

![捐助](https://img.dreamfall.cn/post/termux-xmr/xmr-2.webp)

### 编译安装

在终端输入

```sh
mkdir xmrig-C3/build && cd xmrig-C3/build && cmake .. && make -j$(nproc) && mv xmrig ~ && cd ~ && rm -rf xmrig-C3
```

大约3分钟

## 启动

>根据 @RDReindeer提醒！使用cn-pico算法效率好一些！所以指定算法 -a cn-pico

```sh
./xmrig -u 你的钱包地址 -o  auto.c3pool.org:19999 -p termux -a cn-pico
```

例如：

```sh
./xmrig -u 47piFPRJjKdbN1cQb5YmHDJL7ykAtabwi6jbE4wAfyvC4MA2gq9L4Jt8TUT88aE2JB2PTF1So1EEW6Mt6WnyMjExH838eqG -o auto.c3pool.org:19999 -p termux -a cn-pico
```

然后…你的手机就会开始起飞！

![xmr注册](https://img.dreamfall.cn/post/termux-xmr/xmr-3.webp)

**停止**: 按〈CTRL〉键后输入c 回车

## 查看算力

进入[start map](https://c3pool.com)，在右上角输入钱包地址即可
注意: 运行几分钟后才能看到数据

## 第二次运行

进入Ubuntu

```sh
debian
```

和上面一样，输入指令

```sh
./xmrig -u 钱包地址 -o mine.c3pool.com:13333 -p termux -a cn-pico
```

教程到这就结束了，本教程仅供参考，手机的挖矿效率非常低，不建议使用。