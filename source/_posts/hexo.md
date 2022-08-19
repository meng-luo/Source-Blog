---
title: 关于我HEXO博客的搭建
tags:
- HEXO
- 教程
- 博客
categories: 
- [教程, Hexo]
description: 我博客的详细搭建过程
keywords: HEXO,教程
cover: https://img.dreamfall.cn/cover/2.webp
date: 2021-07-27 02:00:00
updated: 2022-05-02 00:35:00
swiper_index: 2
---

> 我现在使用主题为 Butterfly `4.1.0`版本，
> 框架为HEXO `5.4.1`版本

- 请按照以下步骤依次安装相应依赖和框架

## 安装 Node.js

> **什么是 Node.js ？**
> 这得从什么是 JS 说起，JS 也就是 JavaScript。（为什么有种从盘古开天辟地开始的感觉）没错，JavaScript 就是网页的盘古。JavaScript 是一种编程语言，我们所见到的网页中的交互和逻辑处理几乎都是由 JavaScript 完成。
> JavaScript 语法简单，易学易用。（当然也请不要小瞧它，虽然它入门门槛低，但上限同样也很高。包括但不限于实现网站前后端，手机桌面应用程序，机器学习，计算机图形学等。）
> 在 Node.js 诞生前，JavaScript 都运行于浏览器端。也就是说，它是鱼，浏览器是装满了水的水缸。
> 2008 年，Chrome V8 诞生。2009 年，Node.js 诞生。并成为 GitHub 早期最著名的开源项目。GitHub 可能大家已有所了解，后续再说。
> Node.js 便是一个基于 Chrome V8 引擎的 JavaScript 运行环境。（当年第一次看到这句话时，我也一脸懵逼。）按照我的理解，JavaScript 是鱼，Chrome V8 就是抽水机，Node.js 则把这台抽水机也装在你电脑上。于是你的电脑也有了 Node.js 这个和浏览器相似的水缸，也可以在里面运行 JavaScript 了！
> 当然 Node.js 和浏览器端还是因为自身定位和一些历史原因而有些许区别的，不再展开。
> [Node.js | 百度百科](https://baike.baidu.com/item/node.js/7567977)
> [JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[下载 ｜Node.js](https://nodejs.org/zh-cn/)

建议下载**长期支持版**而非当前发布版（因为如果是最新版，容易出现一些奇妙的 bug）。

- 推荐使用12.X版本

- 全部默认下一步进行安装。

Windows 打开命令提示符（cmd），或者powershell，macOS 打开终端。（= =，这个不会就请百度吧。）
Linux 用户右上角关闭本标签页。

> 后续如提到输入命令，均默认指打开终端进行输入。

输入 node -v，如果提示版本号，那么 Node.js 就已经成功安装。

> Node.js 安装成功时也默认安装了 `npm`，在此后将会用到。
> `npm` 是随 Node.js 一起被安装的包管理工具，你可以理解成 Node.js 自带的应用商店。

对了，国内使用 npm 可能很慢。

你可以考虑切换为 `taobao` 镜像源。（推荐）

```sh
npm config set registry https://registry.npm.taobao.org
```

或者使用阿里云的[cnpm](https://cnpmjs.org/)

## Git 与 GitHub

### 安装 Git

> Visual Studio Code，简称 VS Code。
> 目前最为强大易用的编辑器，轻量且快速。（~~宇宙第一编辑器~~）
> 注意：它并不是我们常常听到的 VS，VS 常常指的是 Visual Studio，是一个功能强大的 IDE（集成开发环境），体积也相比 VS Code 都要大上一个量级。

在此之前，我建议你先安装 [VS Code](https://code.visualstudio.com/)。因为安装 Git Bash 时，可以设置 VS Code 作为默认编辑器。

> Git 是一个开源的分布式版本控制系统，由 Linus Torvalds（同时也是 Linux 的作者）为了管理 Linux 开发而开发。
> 简而言之，是一个版本管理工具。譬如设计师设计好了第三版的海报，客户却说还是要第一版吧，这时便可以通过 Git 快速回退到最初的版本。
> 你只需要把每次更改的状态（Git 会自动进行检测，你只要掌握基础的几条命令就可以了）告诉 Git，而不需要每个版本都保存一份压缩包，既方便也能大大节约空间。
> （当然这主要只对代码文本起作用，因为 Git 的本质是记录各行代码的增减，倘若是像视频、海报这类二进制文件来说便体现不出丝毫优势了。当然想要应对这种场景还有 [Git LFS](https://git-lfs.github.com/)。）

下载 [Git](https://git-scm.com/) 并安装

macOS 用户可以下载官网的安装包进行安装，也可以直接安装 App Store 的 Xcode（附带会安装 Git，但是比较大）。

> 类似的工具还有：SVN。但始终更推荐 Git，因为它功能更为强大且它的背后还有更强大的生态：GitHub。

### 注册 GitHub

这一部分内容，你也可以放到本地调试并预览成功后并打算线上部署的时候，再回过头来看。

> GitHub 一听便与 Git 有所渊源。`Git` 在英文中是懒人、饭桶之意。`Hub` 则是中心、集线器的意思。譬如 USB 集线器就是 USB Hub。所以 GitHub 就是饭桶中心（~~大雾~~）。
> GitHub 是全世界最大的开源项目与代码托管平台，也是众多开发者的交流场所。~~还是全球最大的同性交友网站~~。
> 而代码托管本身用到的正是上文提到的 Git 技术。

- 注册 [GitHub](https://github.com/) 账号。（推荐使用Gmail注册）

（虽然都是英文，但不必畏惧，也并不会造成使用障碍，只要记得最常用的选项含义即可，以及善用手头的翻译软件。）

> 注意：注册时的英文用户名将成为你可以使用的免费域名前缀。

- 登录 GitHub。

> 为什么要用 GitHub？
> 对于平民玩家来说，在初次尝试建立自己的网站时，也许并不会有闲钱或者说决心来购买自己的服务器与域名。
> 而 GitHub 则提供了 [GitHub Pages](https://img.dreamfall.cn/post/hexo/github1.webp) 这一服务。
> 用户们可以利用这一服务，部署自己的静态站点。

- 点击右上角的 `头像` -> `Your repositories` 进入仓库页。

![进入仓库](https://img.dreamfall.cn/post/hexo/github1.webp)

点击 `New`

![仓库页](https://img.dreamfall.cn/post/hexo/github2.webp)

仓库名称务必为 `你的用户名.github.io`，用户名是英文，大小写无所谓，但建议统一小写。（因为你会发现时常切换大小写很麻烦）

![新建仓库](https://img.dreamfall.cn/post/hexo/github3.webp)

> 为什么必须这个作为仓库名？
> GitHub Pages 服务的命名规范，同时若您没有自己的域名，使用 Github 提供的服务的话，请务必将此仓库设为公开，同时它也将成为你的专属域名。当然，你也可以购置自己的专属域名并用它来提供内容。

- 点击 `Create repository`。

## 本地部署

### 安装 Hexo

> [Hexo](https://hexo.io)

- GitHub: [https://github.com/hexojs/hexo](https://github.com/hexojs/hexo)
- [官方文档](https://hexo.io/zh-cn/docs/index.html)（直接参考文档也是一个不错的选择）

> **为什么使用 Hexo ？**
> Hexo 是一个快速、简洁而强大的博客框架，基于 Node.js，同样托管于 GitHub 之上。生态中拥有众多插件主题。你可以基于它快速生成一些静态页面。
> 你可以使用别人的各种主题与插件，也可以自己定制开发想要的功能。
> **为什么不是别的框架?**
> 其他常用的博客框架还有 [WordPress](https://wordpress.org/)，[Typecho](https://typecho.org/)，[Ghost](https://ghost.org/) 等，但这些往往都需要购置自己的服务器，而无法静态化地部署到 GitHub Pages 上。（当然，相应的功能和灵活性也大大提升。）静态化站点还有一个优势就是访问速度往往更快。
> 静态网站生成器还有 [Vuepress](https://vuepress.vuejs.org/)，[Gatsby](https://www.gatsbyjs.org/) 等。但这些多是为了写文档而量身定制的，你也可以使用它们，但是相较 Hexo 的博客定位，它们关于博客的插件和主题以及解决办法会少得多。
> Hexo 提供的功能与 [Hugo](https://gohugo.io/) 几乎都有，（生成大量文件时，甚至比 Hexo 更快）不过它是基于 GO 语言。日后你想对自己的网站进行自定义，即便是 Hugo，你编写前端的交互仍旧需要使用 JavaScript，所以选择基于 JavaScript 的 Hexo 可以降低学习成本。（你若对 GO 有兴趣，仍然可以尝试使用 Hugo，但本教程将不会针对 Hugo 进行展开。）
> 所以对于新手来说，使用 Hexo 作为起始点，不失为一个好选择。（当然如果你有钱租服务器，并希望快速上手的话，就可以考虑考虑 WordPress 或者 Typecho）

- 在终端中输入以下命令：

```sh
npm install hexo-cli -g

# 如果安装失败，可能是没有权限，可以尝试头部加上 sudo 重新执行（Linux）
sudo npm install hexo-cli -g
#如果是Windows系统的请使管理员权限运行终端（理论上不用）
```

> `install` 自然是安装。
> `hexo-cli` 则是 `hexo` 的终端工具，可以帮助你生成一些模版文件，之后再用到。
> `-g` 代表的是全局安装。也就是在任何地方都可以使用，否则会只能在安装的目录下使用。

### 选择目录

此时，请先通过 `cd` 进入你本地电脑打算存储网站代码的文件夹目录。（或者右键文件夹 Git Bash Here）

> [cd | DOS 命令](https://baike.baidu.com/item/cd/3516393)
> [cd （LINUXSHELL 命令）](https://baike.baidu.com/item/cd/3516411)

譬如：

> 注意：这里是你自定义的目录，请不要复制粘贴

```sh
# '#' 字符后的文字代表注释，不需要输入
# Windows
cd C:\Users\CCKNBC\Documents\GitHub\
#实际上我用的是D:blog目录,按需选择即可
# macOS
cd /Users/yunyou/github/
```

### 创建博客

接下来输入：

```sh
hexo init 你想建立的文件夹名
#例如 hexo init blog
```

> `hexo` 正是因为我们之前安装了 `hexo-cli` 这一个包，所以我们可以在终端中使用 `hexo` 这一命令。
> `init` 初始化博客的模版文件。后面跟的是你要新建的文件夹，最好和你此前新建的仓库名一致（防止记错）。

### 安装依赖

```sh
# 进入你的博客文件夹
cd 上一步新建的名字 # 例如 cd blogs
npm install
```

### 生成文件

下面命令也可以缩写成 `hexo g` `hexo s`

```sh
hexo generate
hexo server
```

`server` 代表开启本地的 Hexo 服务器，这时你就可以打开浏览器，在地址栏中输入 `localhost:4000` 就可以看到本地的网页了。

按 `Ctrl + C` 中断服务器的运行。

至此，基础的模版页面便已经搭建好了。

## 主题安裝（教程以butterfly主题为例子）

### 使用 Hexo 主题

Hexo 默认提供的是 [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) 主题。
默认主题样式简单，功能较少。所以大多数人并不会使用默认主题。

{% tabs test1 %}
<!-- tab npm 安装（推荐） -->
> 此方法只支持`Hexo 5.0.0`以上版本

在博客根目录里

```sh
npm i hexo-theme-butterfly
```
<!-- endtab -->

<!-- tab Git 安装 -->
在博客根目录里安装稳定版`master`分支【推荐】

```sh
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

如果想要安装比较新的`dev`分支（开发版），可以

```sh
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
<!-- endtab -->
{% endtabs %}

### 应用主题

修改 hexo 根目录的配置文件`_config.yml`，把主题改为`Butterfly`（注意配置要和你的主题文件夹名大小写完全一致哦）

```yml
theme: butterfly
```

> 如果你沒有`pug`以及`stylus`的渲染器，请下载安装：（第一次安装的话肯定没有）

```sh
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

> 在进行配置修改之前，为了以后主题通过 git pull 平滑升级，请不要随意改动主题源码我们通常在 Hexo 根目录/**`themes/butterfly/`**下把主题的 **`_config.yml`**复制到HEXO根目录，并且重命名为 **`_config.butterfly.yml`**，然后再对 _config_butterfly.yml 进行修改即可

有了上面的基础，我们就可以根据对应的[**文档**](https://hexo.io/zh-cn/docs/)修改相应的配置了,以下不再赘述

## 生成静态文件

至今我们的工作都是在本地进行，想必你也很想放到线上与小伙伴们分享。
这便轮到了 GitHub Pages 的出场，不过 GitHub Pages 只支持纯静态文件。

所以我们需要使用以下命令先来生成站点的静态文件。

```sh
# 如果进行多次生成，为了避免受错误缓存影响，最好使用 hexo clean 先清除一遍。
hexo generate
# 上面命令可以缩写为 hexo g
```

此时你的HEXO根目录下会出现 `public` 这个文件夹，里面存放的就是你站点的静态文件。

## 与远程仓库建立关联

接下来我们将本地的仓库与此前在 GitHub 上建立的仓库建立关联。

```sh
git init
# 初始化 Git 仓库，只需要执行一次即可
```

在将其部署到 GitHub Pages 上之前，我们最好先建立一个分支。

> 什么是分支？
> Git 提供了版本管理功能，其中还有一个分支功能，你现在可以简单地将其理解为磁盘的不同盘符。

`你的github用户名.github.io` 部署后，GitHub Pages 将默认使用你的 master 分支作为静态文件部署。
所以我们最好新建一个 hexo 分支（命名无所谓）用来存储 Hexo 地源代码，master 分支则用来存储部署后的静态文件。

```sh
git checkout -b master
```

这时便成功建立了一个 master 分支。（此后的工作都将在 master 分支下进行）

你可以通过 `git branch -v` 来查看当前有哪些分支，使用 `git branch 分支名` 来切换到对应的分支。

## 部署

为了更方便的部署到 GitHub Pages，Hexo 提供了 `hexo-deployer-git` 插件。

老规矩，安装。

```sh
npm install hexo-deployer-git
```

在 `_config.yml` 中配置。

```yaml
deploy:
  type: git
  repo: 你此前新建的仓库的链接 # 比如：https://github.com/meng-luo/meng-luo.github.io
  branch: master # 默认使用 master 分支
  message: Update Hexo Static Content # 你可以自定义此次部署更新的说明
```

保存，部署！

> 第一次可能需要你输入用户名与密码。
> 密码输入的时候不会出现 \*\*\*，不要害怕，已经输入进去了。

```sh
hexo deploy
#可以省略为 hexo d
```

等待完成后，打开网址 `https://用户名.github.io` 就能看到你的线上网站了。

> 使用 https，http 可能无法正常打开。HTTPS 是多了安全加密的 HTTP，Chrome 浏览器已经默认会显示 `http` 链接为不安全。
> 为了安全，建议开启强制 https 跳转。`项目地址页面 -> Settings -> Pages -> Enforce HTTPS`

![pages](https://img.dreamfall.cn/post/hexo/github4.webp)

> 此时，http 网址会自动重定向到 https
