
// 导航栏的隐藏与出现
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var weight = document.getElementById("head")
    if (t >= 100) {

        weight.style.display = "inline";
    } else {
        weight.style.display = "none";
    }    
} 
// 我的弹出登录注册框
$(".icon-wode").click(function(){
    
})