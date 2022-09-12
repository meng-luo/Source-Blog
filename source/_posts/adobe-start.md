---
title: 快来自定义你的adobe启动图吧
tags:
- Adobe
categories: 
- [教程,Adobe]
description: 作为一名老 二刺 螈，电脑当然也要充满了 二刺螈 气息(
keywords: Adobe, 教程
cover: https://img.dreamfall.cn/cover/10.webp
date: 2022-08-31 19:36:00
updated: 2022-08-31 19:36:00
---

{% folding red, 查看参考教程 %}

[如何制作属于自己的Adobe启动界面 -酷安](https://www.coolapk.com/feed/32265727?shareKey=NmE4MjQ0YzI4ZGU2NjMwZjQyMjU~&shareUid=1815173&shareFrom=com.coolapk.market_12.4.2)

{% endfolding %}

## 预览
{% tabs 预览 %}
<!-- tab Photoshop -->
![PS](https://img.dreamfall.cn/post/adobe-start/preview1.webp)
<!-- endtab -->

<!-- tab Premiere-Pro -->
![PR](https://img.dreamfall.cn/post/adobe-start/preview2.webp)
<!-- endtab -->

<!-- tab After-Effects-->
![AE](https://img.dreamfall.cn/post/adobe-start/preview3.webp)
<!-- endtab -->
{% endtabs %}
## 准备
1. adobe软件
2. PhotoShop（用于图片操作）
3. Restorator 2018 （见进阶教程，针对软件：AE，AI，AU，LR ）下载地址：[梦璃雨落的网盘](https://pan.dreamfall.cn/blog/adobe-start/Restorator2018.zip)
4. icon提取（见异类教程，针对软件：PS） 下载地址：[梦璃雨落的网盘](https://pan.dreamfall.cn/blog/adobe-start/icon%20提取.zip)

## 一般教程
以pr为例
1. 打开pr的安装目录，在安装目录里找到名为**PNG**的文件夹
![pr1](https://img.dreamfall.cn/post/adobe-start/pr1.webp)
2. 在里面找到**“pr_splash”**这个文件，这里面总共有三个相似文件，可以根据自己的电脑分辨率选择（我是2.5k屏，对应的文件是pr_splash@3to2x.png），如果不知道选哪个那就全都改一遍吧（
![pr2](https://img.dreamfall.cn/post/adobe-start/pr2.webp)
3. 用Photoshop打开对应文件**（记得备份源文件）**，然后把右边的一块图片抠掉
![pr3](https://img.dreamfall.cn/post/adobe-start/pr3.webp)
4. 然后拖入你想要替换的图片到ps中，将图层置于这个图层下面。
![pr4](https://img.dreamfall.cn/post/adobe-start/pr4.webp)
5. 然后快速导出为PNG即可，将修改的PNG图片替换源文件**（记得备份源文件（再次提醒））**

## 进阶教程
一般教程只能对Adobe中的少部分软件有效，假如PNG文件夹里没有启动图或者没有PNG文件夹，那就得要用进阶教程了
Restorator 2018和icon提取的[下载链接](https://pan.dreamfall.cn/blog/adobe-start)

下面以Ae为例
1. 下载安装Restorator 2018，并安装，注册码在txt文件里
2. 打开Ae安装目录的Support Files文件夹，将**AfterFXLib.dll**文件拖入到“Restorator 2018”的窗口中，打开PNG文件夹，将**AE_SPLASH**相似的三个文件导出，然后按照一般教程的第三步修改启动图
![ae1](https://img.dreamfall.cn/post/adobe-start/ae1.webp)
3. 修改完后将**对应**的文件拖入“Restorator 2018”软件中**对应**的资源上（一定要对应）
![ae2](https://img.dreamfall.cn/post/adobe-start/ae2.webp)
4. 另存为，将修改后的文件另存为，**备份源文件**，再进行替换
![ae3](https://img.dreamfall.cn/post/adobe-start/ae3.webp)
## 异类教程
接下来是最后一个“异 类“：PS
1. 下好“icon提取”，然后找到PS安装目录下的“Resources”文件夹，将它复制到“icon提取”文件夹中 。
![ps1](https://img.dreamfall.cn/post/adobe-start/ps1.webp)
2. 运行“Extract.cmd”，会得到一个“Work”文件夹 ，点击进去，同样的，我是2k屏幕所以修改的是“High”文件夹中的图片，其他设备请自行尝试。
3. 在这两个文件夹任意一个中找到“Splash1080Background_s0.png”文件，将他复制出来，使用PS修改，再粘贴回去覆盖掉。
![ps2](https://img.dreamfall.cn/post/adobe-start/ps2.webp)
4. 之后一路返回到“icon提取”文件夹，点击“Pack.cmd”，运行完成后点进“Work”文件夹，将里面的“Resources”文件夹粘贴回Ps的安装目录下即可。

## 总结
各个软件启动界面文件名称（以本人2.5k屏幕所修改的文件为例）
AE：AE_SPLASH_AT_3TO2X.png
AI：ai_cc_splash@3to2x.png
AU：AU_SPLASH_AT_3TO2X.png
LR：LRC_SPLASH~1.5X.png
PR：pr_splash@3to2x.png
PS：Splash1080Background_s0.png

各个软件的启动界面所在目录：
PR: Adobe\Adobe Premiere Pro 2022\PNG\ pr_splash.png
AE: Adobe\Adobe After Effects 2022\Support Files\AfterFXLib.dll
AI: Adobe\Adobe Illustrator 2022\Support Files\Contents\Windows\ai_cc_splash
AU: Adobe\Adobe Audition 2022\AuUI.dll
LR: Adobe\Adobe Lightroom Classic\Lightroom.exe
PS: Adobe\Adobe Photoshop 2022\ Resources

## 资源
我已经修改好的[ps,pr,ae启动图（含备份）](https://pan.dreamfall.cn/blog/adobe-start/ps,pr,ae修改后文件（含备份）.zip)