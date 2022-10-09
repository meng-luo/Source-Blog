---
title: 朋友圈
date: 2022-10-09 13:15:16
---

<div id="app"></div>
<script>
    let UserConfig = {
        // 填写你的api地址
        private_api_url: 'https://friend.dreamfall.cn/',
        // 点击加载更多时，一次最多加载几篇文章，默认10
        page_turning_number: 10,
        // 头像加载失败时，默认头像地址
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c',
        // 进入页面时第一次的排序规则
        sort_rule: 'created'
    }
</script>
<script type="text/javascript" src="https://cdn.dreamfall.cn/imgscdn/fcircle/app.min.js"></script>
<script type="text/javascript" src="https://cdn.dreamfall.cn/imgscdn/fcircle/bundle.js"></script>