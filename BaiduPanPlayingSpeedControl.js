// ==UserScript==
// @name        BaiduPanPlayingSpeedControl
// @namespace   Violentmonkey Scripts
// @match       https://pan.baidu.com/play*
// @grant       none
// @version     0.02
// @author      lightningwar
// @description 
// ==/UserScript==

! function () {
    let vip_div;
    var currentRate = 1.00;
    (function () {
        var m_xb = "<div id='box' style='cursor:pointer;z-index:98;display:block;width:100px;height:200px;line-height:30px;position:fixed;left:50;top:150px;text-align:center;overflow:visible'> <style>a{font-size:18px;text-decoration:none;}a:hover {color:red;text-decoration:none}</style><p>可选速度</p><br/><p>当前速度</p><br/><a id='m_ts' style='color:red;font-size:18px;'>1倍速</a></div>";
        $("body").append(m_xb);
        // 清除VIP元素
        if (document.getElementsByClassName("gOIbzPb")) {
            vip_div = document.getElementsByClassName("gOIbzPb")[0];
            vip_div.parentNode.removeChild(vip_div);
        }
        if (document.getElementsByClassName("privilege-box")) {
            vip_div = document.getElementsByClassName("privilege-box")[0];
            vip_div.parentNode.removeChild(vip_div);
        }
        if (document.getElementsByClassName("find-light-icon")) {
            vip_div = document.getElementsByClassName("find-light-icon")[0];
            vip_div.parentNode.removeChild(vip_div);
        }
        if (document.getElementsByClassName("dis-footer")) {
            vip_div = document.getElementsByClassName("dis-footer")[0];
            vip_div.parentNode.removeChild(vip_div);
        }
        // if (document.getElementsByClassName("top-right-box")) {
        //     vip_div = document.getElementsByClassName("top-right-box")[0];
        //     vip_div.parentNode.removeChild(vip_div);
        // }
        window.onload = function () {
			document.addEventListener('keypress', function(e) {
                if ((e.key === 'c' || e.key === 'C') && Number(currentRate.toFixed(2)) <= 16.00) {
                    currentRate += 0.10;
                    videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(currentRate);
                    console.log(currentRate.toFixed(2));
                    console.log(typeof currentRate.toFixed(2));
                }
				else if ((e.key === 'x' || e.key === 'X')  && Number(currentRate.toFixed(2)) > 0.00){
                    currentRate -= 0.10;
                    videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(currentRate);
                    console.log(currentRate.toFixed(2));
                    console.log(typeof currentRate.toFixed(2));
                }
                else if (e.key === 'z' || e.key === 'Z'){
                    currentRate = 1.00;
                    videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(currentRate);
                    console.log(currentRate.toFixed(2));
                    console.log(typeof currentRate.toFixed(2));
                }
                else {
                    console.log("无效");
                }
			})
        };
    })();
}();
