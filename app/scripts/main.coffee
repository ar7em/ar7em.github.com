$(document).ready ->
    $("#parallaxScene").parallax
        limitX: false
        limitY: false
        scalarX: 7
        scalarY: 5
        frictionX: 1
        frictionY: 1

    moveDecorations()


$(window).resize ->
    moveDecorations()


moveDecorations = () ->
    approxSceneHeight = 350
    topDistance = $(window).height() - $('.hero').height() - approxSceneHeight;
    console.log(topDistance )
    $(".starfield .layer").css "margin-top", topDistance + 'px'
    $(".starfield").css "display", "block"