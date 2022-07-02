jQuery(function () {
    wit = screen.width
    jQuery(window).resize(function () {
    if (jQuery(this).width < 664){
        $("#rock").removeClass("none");
    }else{
        $("#rock").addClass("none");
    } 
    });
    });
