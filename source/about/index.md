---
title: 关于我
date: 2021-07-21 22:40:33
updated: 2021-8-15 02:19:20
type: about
---

这个人很懒，什么都没有留下

**详细信息请前往 [关于页](https://home-beta-eight.vercel.app)**

~~就留下了了个鸟蛋~~

### 访问统计
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