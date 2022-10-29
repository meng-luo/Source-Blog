window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
        result = Math.round(a / b * 100), // 计算百分比
        btn = document.querySelector("#go-up"); // 获取按钮

    if (result < 95) { // 如果阅读进度小于95% 就显示百分比
        btn.childNodes[0].style.display = 'none'
        btn.childNodes[1].style.display = 'block'
        btn.childNodes[1].innerHTML = result + '<span></span>';
    } else { // 如果大于95%就显示回到顶部图标
        btn.childNodes[1].style.display = 'none'
        btn.childNodes[0].style.display = 'block'
    }
}

// 浏览器版本提醒
function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '浏览器版本较低，网站样式可能错乱',
        actionText: '关闭',
        duration: '6000',
        pos: 'bottom-right'
    });
}
function browserVersion() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isFirefox = userAgent.indexOf("Firefox") > -1;
    var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ;
    var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1;
    var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1;
    if(isEdge) {
        if(userAgent.split('Edge/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isFirefox) {
        if(userAgent.split('Firefox/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isOpera) {
        if(userAgent.split('OPR/')[1].split('.')[0]<80){
            browserTC()
        }
    } else if(isChrome) {
        if(userAgent.split('Chrome/')[1].split('.')[0]<90){
            browserTC()
        }
    } else if(isSafari) {
        //不知道Safari多少版本才算老旧
    }
}
function setCookies(obj, limitTime) {
	let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toUTCString()
	for (let i in obj) {
		document.cookie = i + '=' + obj[i] + ';expires=' + data
	}
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
if(getCookie('browsertc')!=1){
    setCookies({
        browsertc: 1,
    }, 1);//设置cookie缓存一天，即一天弹一次
    browserVersion();
}
