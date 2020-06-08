$( document ).ready(function(){
    $("#show").click(function(){
        $("#img1").show(600);
    })
    $("#hide").click(function(){
        $("#img1").hide(600);
    })
    $("#fadeIn").click(function(){
        $("#img2").fadeIn();
    })
    $("#fadeOut").click(function(){
        $("#img2").fadeOut();
    })


    $("#delay").click(function(){
        showAndHide();
    })


    $("#finish").click(function(){
        $("#img3").finish();

    })
});
function showAndHide(argument) {
    $("#img3").show(8000)
              .delay(1000)
              .hide(8000);
        setTimeout( showAndHide, 100 );
    }