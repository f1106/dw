
// 导航栏的隐藏与出现
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 100) {

        $("#head").fadeIn("fast")
        $("#user").fadeOut("fast")
    } else {
        $("#head").fadeOut("fast")
    }    
} 
// 我的弹出登录注册框
$(".watch").click(function(){
    $("#user").slideToggle("fast")
})

