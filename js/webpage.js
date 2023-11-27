$(function (){
    // 프론트엔드 포트폴리오
    $("#webpage04").mouseenter(function(){
        $("#webpage04 img").stop().animate({marginTop:"-1885px"}, 2500)
    }).mouseleave(function(){
        $("#webpage04 img").stop().animate({marginTop: "0px"}, 1000)
    })

    // 배경과 아이콘
    $(".web-box").hover(function(){
        $(this).css({"background": "rgba(0,0,0,0.3)"});
        $(this).find("svg").show();
    }, function(){
        $(this).css({"background": "rgba(0,0,0,0)"});
        $(this).find("svg").hide();
    })
});