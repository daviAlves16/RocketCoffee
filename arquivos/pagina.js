function myFunction() {
        var x = document.getElementById("myLinks");
        var y = document.getElementById("logoAbrir")
        var z = document.getElementById("logoFechar")
        if (x.style.display === "block") {
          x.style.display = "none";
          
          y.style.display = "block";
          z.style.display = "none";
          
        } else {
          x.style.display = "block";
          
          y.style.display = "none";
          z.style.display = "block";

        }
}

jQuery(function () {
  wit = screen.width
  var x = document.getElementById("myLinks");
  jQuery(window).resize(function () {
  if (jQuery(this).width() > 554){
    if(x.style.display === "block"){
      x.style.display = "none";
    }
  }
  });
  });
