---
title: 搜索引擎进阶使用方法
date: 2021-08-11 23:55:10
updated: 2021-08-12 23:55:11
keywords: 搜索引擎语法
categories: 笔记
tags: 
- 搜索引擎
cover: https://img.dreamfall.cn/cover/6.webp
description: 你绝对不知道的搜索引擎食用方法
---

## site:

site: 用来搜索某个域名下的所有被搜索引擎收录的文件，适用于所有的搜索引擎。

另外，site命令还可以限制在某一网站内搜索，site语法把搜索范围局限在这些网站内，以提高搜索效率。

- 语法： 关键词 site: 网站（不需要输入http://）

例子：网站 site:ysbrid.top

> 谷歌搜索可以 site:.域名后缀 ,来搜索所有是域名后缀的网站

---

## domain:

domain查询结果有的叫相关域，有的等同于外部链接。

- 语法：domain: 网站

例子：domain:ysbrid.top

---

## inurl:

> URL全称Uniform Resource Locator，中文译为“统一资源定位器”，就是地址栏里的内容。

inurl:指令用于搜索查询词出现在url中的页面，百度和Google都支持inurl指令，inurl指令支持中文和英文。

- 语法：inurl:关键词

比如搜索：inurl:搜索引擎优化，返回的结果都是网址url中包含“搜索引擎优化”的页面。

> 由于关键词出现在url中对排名有一定影响，使用inurl:搜索可以更准确地找到竞争对手。

---

## and

利用and表示前后两个关键词是“与”的逻辑关系。

- 语法：关键词 and 关键词

例如输入关键词：“梦璃雨落 and 小屋”，就会找出将包含梦璃雨落和小屋有关的网站。

> and 可以用空格替代

---

## OR

利用OR(|)表示前后两个词是“或”的逻辑关系。

- 语法：关键词 or(|) 关键词

例如输入关键词：“梦璃雨落 or 小屋”，会找出将包含梦璃雨落或者小屋的网页。

> 百度只能用 | ，谷歌可以用OR 和 |

## 双引号（""）

把搜索词放在双引号中（英文半角双引号），代表完全匹配搜索一个词，也就是说搜索结果返回的页面包含双引号中出现的所有的词，连顺序也必须完全匹配，目前，百度和Google都支持这个指令。

- 语法：”关键词 关键词 关键词“

例如：搜索“泠鸢yousa”。

---

## 减号（-）

减号代表搜索不包含减号后面的词的页面，使用这个指令时减号前面必须是空格，减号后面没有空格，紧跟着需要排除的词。

- 语法：关键词 -关键词

> 目前，Google和百度都支持这个指令，例如：“百科 -百度”这个词，却不包含“百度”这个词的结果。

## 星号（*）

星号*是常用的通配符，也可以用在搜索中，目前，百度不支持*号搜索指令。

- 语法：关键词*

比如在Google中搜索“搜索*擎”其中的*号代表任何文字，返回的结果就不仅包含“搜索引擎”，还包含了“搜索收擎”，“搜索巨擎”等内容。

---

## intitle:

intitle:指令返回的是页面title中包含关键词的页面，目前，百度和Google都支持intitle指令。

使用intitle指令找到的文件是更准确的竞争页面，如果关键词只出现在页面可见文字中，而没有出现在title中，大部分情况是并没有针对关键词进行优化，所以也不是有力的竞争对手。

- 语法：intitle:关键词

intitle命令还有一种用法，表示后接的词限制在网页标题范围内。

例如，找明星的个人资料页，一般来说，明星资料页的标题，通常是明星的名字，而在页面上，会有“姓名”、“身高”等词语出现。

比如：找泠鸢yousa的资料，就可以用“泠鸢yousa 名字 身高”来查询，而由于明星的名字一般在网页标题中出现，因此，更精确的查询方式，可以是“名字 身高 intitle:泠鸢yousa”。

---

## inanchor:

inanchor:指令返回的结果是导入链接锚文字中包含搜索词的页面，目前，百度暂不支持inanchor。

- 语法：inanchor:关键词

当我们用inanchor提交查询的时候，Google会限制结果是那些在网页anchor链接里边包含了查询关键词的网页。

比如在Google搜索“inanchor:点击这里”返回的结果页面本身并不一定包含“点击这里”这四个字，而是指向这些页面的链接锚文字中出现了“点击这里”这四个字。

例如：“restaurants inanchor:gourmet”，提交这个查询，Google会查询那些在anchor信息里包含了关键词“restaurants”和关键词“gourmet”的网页。

---

## filetype:

filetype命令对搜索对象的文件类型做限制，冒号后是文档格式，如PDF、DOC、XLS等。

- 语法：filetype:扩展名

当我们在查询里边包含filetype:扩展名的时候，Google会限制查询结果仅返回特定文件类型的网页。

> 用于搜索特定文件格式，目前，Google和百度都支持filetype指令，比如搜索：“SEO优化 filetype:pdf”，搜索返回的就是包含“SEO优化”这个关键词的所有pdf文件，其它可用的特定文件类型格式查询还有doc、txt、ppt、xls、rtf、swf、ps等。

---

## allinanchor:

anchor是一处说明性的文字，它标注说明了这个链接可能跳转到其它的网页，或跳转到当前网页的不同地方，当我们用allinanchor提交查询的时候，Google会限制搜索结果必须是那些在anchor文字里，包含了我们所有查询关键词的网页。

例如：“allinanchor: best museums Sydney”，提交这个查询，Google仅仅会返回在网页anchor说明文字里边包含了关键词“best”、“museums”和“Sydney”的网页。

---

## allintext:

当我们用allintext提交查询的时候，Google会限制搜索结果仅仅是在网页正文里边包含了我们所有查询关键词的网页。

例如：“allintext: travel packing list”，提交这个查询，Google仅仅会返回在一个网页包含了三个关键词“travel”、“packing”和“list”的网页。

---

## allintitle:

allintitle:搜索返回的是页面标题中包含多组关键词的文件，当我们用allintitle提交查询的时候，Google会限制搜索结果仅是那些在网页标题里边包含了我们所有查询关键词的网页。

例如：“allintitle: detect plagiarism”，提交这个查询，Google仅会返回在网页标题里边包含了“detect”和“plagiarism”这两个关键词的网页。

而intitle:SEO intitle:搜索引擎优化返回的是标题中既包含“SEO”，也包含“搜索引擎优化”的页面。

---

## allinurl:

与allintitle:类似，allinurl:SEO搜索引擎优化就相当于inurl:SEO inurl:搜索引擎优化。

当我们用allinurl提交查询的时候，Google会限制搜索结果仅是那些在URL（网址）里边包含了我们所有查询关键词的网页。

例如：“allinurl: mahaixiang SEO”，提交这个查询，Google仅会返回在URL里边包含了关键词“mahaixiang”和“SEO”的网页，像www.15d.cc/seo/index.html等的网页。

---

## author:

当我们用author进行查询的时候，Google会限制返回结果仅仅是那些在Google论坛里边，包含了特定作者的新闻文章，在这里，作者名可以是全名，也可以是一部分或邮件地址。

例如：“泠鸢yousa author:梦璃雨落"返回结果将是作者梦璃雨落写的，关于包含关键词泠鸢yousa的文章。

---

## cache:

提交cache:url，Google会显示当前网页的快照信息，从而替换网页的当前信息。

例如：“ysbrid.top”，提交这个查询，Google会返回所有抓取的关于url的网页快照信息，在显示的网页快照信息里边，Google会高亮显示查询关键词（在cache:和URL之间不能有空格）。

---

## datarange:

当我们使用datarange进行查询的时候，Google会将查询结果限制在一个特定的时间段内，这个时间相对于网站来说，是按网站被google收录的时间算的。

例如：“Geri Halliwell” “Spice Girls” daterange:2450958-2450968，这里的时间日期格式是按天文学的儒略日（这个搜索语法Google并不推荐使用，因为它会返回一些莫名其妙的东西）。

---

## define:

当我们用define进行查询的时候，Google会返回包含查询关键词定义的网面。

例如：“define: blog”，这个查询将会返回Blog的定义。
