---
date: 2021-07-21 22:40:33
title: 关于我
type: about
updated: 2023-01-09 23:43:58
---
## 自我介绍

首先呢，我叫**梦璃雨落**（简称**梦落**），基本上大部分网名都是这个，头像呢是和泉纱雾 ~~（我老婆）~~

目前已知信息

* 职业：学生，大一，信息安全专业
* 爱好：各种折腾
* 技能：Python（基础），前端（基础），信息安全（在学），刷机（入门到变砖），剪辑（会做mad），Linux（全分支）
* 阴游人：phigros（主玩），malody（4k），musedesh（计划通），project sekai（入门）
* 二次元（浓度看我网站不就知道了）
* 夜猫子（无论怎么样不到1点不睡，基本上3、4点睡，并且白天也不困）
* 不怎么玩游戏（也就只打原神）
* 爱刷B站（活跃于动画区，虚拟区，科技区，音乐区）
* 鸟蛋
* 酷友
* 鸽子
* 现实中的社恐，~~网络中的“社恐”~~
* 成分复杂

## 关于本站

* Hexo 5.4.1
* butterfly 4.1.0 （钉子户）
* 至于不一样的全是魔改
* 本站以技术，教程类为主，生活类为辅
* 已开源至github

## 访问统计

<div id="statistic">
<div class="content"></div>
<span style="font-size:14px">流量统计支持：<a style="color:#1690ff;" href="https://v6.51.la/">51la</a></span>
</div>

<!-- js -->

<script>
// 链接替换即可，不需要后面的参数
fetch('https://v6-widget.51.la/v6/JfxdPlPgJn69L5Ul/quote.js').then(res => res.text()).then((data) => {
    let title = ['最近活跃访客', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
    let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
    let s = document.querySelector('#statistic .content')
    // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
    for (let i = 0; i < num.length; i++) {
        if (i == 0 || i == num.length - 1) continue;
        s.innerHTML += '<div><span>' + title[i] + '</span><span class="num">' + num[i] + '</span></div>'
    }
});
</script>
